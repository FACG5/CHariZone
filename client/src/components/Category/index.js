/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import queryString from 'query-string';
import ReactLoading from 'react-loading';
import swal from 'sweetalert';
import './style.css';
import More from '../SearchReaslt/More';
import HeaderCategory from './HeaderCategory';
import CategoryDetails from './CategoryDetails';
import CharityCount from '../CommonComponents/CharityCount';
import Header from '../Header';
import Footer from '../HomePage/Footer';
import ResultCard from '../CommonComponents/ResultCard';
import { CountContext } from '../Context/CountContext';
import CategoryDetailsData from '../CategoryDetailsData';

class Category extends Component {
  state = {
    details: {},
    data: [],
    activeMore: false,
    isData: false,
  };

  componentWillMount = () => {
    this.getData();
  };

  getData = () => {
    const {
      location: { search },
    } = this.props;
    const values = queryString.parse(search);
    const { category } = values;
    if (!category) {
      return this.setState({
        found: true,
      });
    }
    const str = category.split(' ')[0];
    fetch(
      `/api/v1/filter?incfrom=-1&incto=-1&exform=-1&exto=-1&category='${str}'`
    )
      .then(response => response.json())
      .then(response => {
        const { data, error } = response;
        if (error) {
          this.setState({ isData: true });
          return;
        }
        const array = data.map((item, index) => {
          const object = {};
          object.id = index + 1;
          object.idChirty = item.regno;
          object.name = item.name;
          object.governance = item.Governance;
          object.financial = item.Financial;
          object.impact = item.Impact;
          object.classification = item.what['0'];
          object.text = item.objective;
          if (item.img) {
            object.logo = item.img[0].url;
          } else {
            object.logo =
              'https://www.atlrewards.net/cwa-nearby-areas-portlet/images/nologo.png';
          }
          object.isActive = false;
          return object;
        });

        const details = CategoryDetailsData.find(x => x.name.includes(str));
        console.log('details', details);

        this.setState({
          details,
          data: array,
          isData: true,
        });
      })
      .catch(err => {
        swal('Oops!', 'Something went wrong!', 'error');
      });
  };

  getAllData = () => {
    this.setState({ activeMore: true });
  };

  handlerPageDonate = () => {
    const { history } = this.props;
    history.push('/under-construction');
  };

  capitalFirst = string =>
    string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

  stringIsMore = (name, string) => {
    if (name.length > 28) {
      return string.length > 100 ? `${string.slice(0, 100)} more..` : string;
    }
    return string.length > 130 ? `${string.slice(0, 130)} more..` : string;
  };

  handleFromat = (valueStr, value, str, number) => {
    if (valueStr === 'financial') {
      return value === str ? value : `${value} / ${number}`;
    }
    return value === str ? 'Not analyzed yet' : `${value} / ${number}`;
  };

  specificٍSize = array => array.length > 3;

  render() {
    const { data, activeMore, isData, refresh, details } = this.state;
    return (
      <React.Fragment>
        <Header />
        <div className="body">
          {!isData ? (
            <div className="loading-bubbles">
              <ReactLoading
                type="bubbles"
                color="#0067dd"
                height="20%"
                width="20%"
              />
            </div>
          ) : (
            <>
              <HeaderCategory
                numberOfResult={data.length}
                name={details.name}
              />
              <CharityCount refresh={refresh} />
              <div className="container">
                <div className="result-cards">
                  <CountContext.Consumer>
                    {consumer => {
                      const { charityList, changeActive } = consumer;
                      const charityListId = charityList.map(
                        charity => charity.charityId
                      );
                      const dataActive = data.map(charity => {
                        charity.isActive = charityListId.includes(
                          charity.idChirty
                        );
                        return charity;
                      });
                      return dataActive.slice(0, 5).map(item => {
                        const {
                          idChirty,
                          id,
                          isActive,
                          logo,
                          name,
                          text,
                          governance,
                          impact,
                          financial,
                        } = item;
                        return (
                          <ResultCard
                            extraClass="result-cards-caregory"
                            idChirty={idChirty}
                            key0={id}
                            isActive={isActive}
                            onClickCompare={() =>
                              changeActive(item.idChirty, item.name)
                            }
                            onClickDonate={() => this.handlerPageDonate()}
                            logo={logo}
                            name={this.capitalFirst(name)}
                            text={this.capitalFirst(
                              this.stringIsMore(name, text)
                            )}
                            financial={this.handleFromat(
                              'financial',
                              financial,
                              '#DIV/0!',
                              6
                            )}
                            governance={this.handleFromat(
                              'governance',
                              governance,
                              ' -   ',
                              8
                            )}
                            impact={this.handleFromat(
                              'impact',
                              impact,
                              ' -   ',
                              3
                            )}
                          />
                        );
                      });
                    }}
                  </CountContext.Consumer>
                  {!activeMore && (
                    <More
                      specificٍSize={this.specificٍSize(data)}
                      getAllData={() => this.getAllData()}
                    />
                  )}
                  {activeMore && (
                    <CountContext.Consumer>
                      {consumer => {
                        const { charityList, changeActive } = consumer;
                        const charityListId = charityList.map(
                          charity => charity.charityId
                        );
                        const dataActive = data.map(charity => {
                          charity.isActive = charityListId.includes(
                            charity.idChirty
                          );
                          return charity;
                        });

                        return dataActive
                          .slice(5, data.length)
                          .map(item => (
                            <ResultCard
                              extraClass="result-cards-caregory"
                              idChirty={item.idChirty}
                              key0={item.id}
                              isActive={item.isActive}
                              onClickCompare={() =>
                                changeActive(item.idChirty, item.name)
                              }
                              onClickDonate={() => this.handlerPageDonate()}
                              logo={item.logo}
                              name={this.capitalFirst(item.name)}
                              text={this.capitalFirst(
                                this.stringIsMore(item.name, item.text)
                              )}
                              financial={this.handleFromat(
                                'financial',
                                item.financial,
                                '#DIV/0!',
                                6
                              )}
                              governance={this.handleFromat(
                                'governance',
                                item.governance,
                                ' -   ',
                                8
                              )}
                              impact={this.handleFromat(
                                'impact',
                                item.impact,
                                ' -   ',
                                3
                              )}
                            />
                          ));
                      }}
                    </CountContext.Consumer>
                  )}
                </div>
                <div className="category-details">
                  <CategoryDetails details={details} />
                </div>
              </div>
            </>
          )}
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default Category;
