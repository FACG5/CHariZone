/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';

import queryString from 'query-string';
import ReactLoading from 'react-loading';
import swal from 'sweetalert';
import './style.css';
import More from './More';
import HeaderSearch from './HeaderSearch';
import CharityCount from '../CommonComponents/CharityCount';
import Header from '../Header';
import Footer from '../HomePage/Footer';
import ResultCard from '../CommonComponents/ResultCard';
import { CountContext } from '../Context/CountContext';

class SearchReaslt extends Component {
  state = {
    data: [],
    activeMore: false,
    isData: false,
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

  handlerPageDonate = () => {
    const { history } = this.props;
    history.push('/under-construction');
  };

  specificٍSize = array => array.length > 3;

  getAllData = () => {
    this.setState({ activeMore: true });
  };

  getData = () => {
    const {
      location: { search },
    } = this.props;
    const values = queryString.parse(search);
    let url = '';
    const { category, incfrom, incto, keyword } = values;
    if (category) {
      url = `/api/v1/filter?incfrom=${incfrom}&incto=${incto}&category=${category}`;
    } else {
      url = `/api/v1/search?q=${keyword}`;
    }
    fetch(url)
      .then(response => response.json())
      .then(response => {
        const { data, error } = response;
        if (error) {
          this.setState({ isData: true });
          return;
        }
        let array = data.map((item, index) => {
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
        if (keyword) {
          array = array.reduce((arr, item) => {
            if (item.name.includes(keyword.toUpperCase())) {
              arr.unshift(item);
              return arr;
            }
            arr.push(item);
            return arr;
          }, []);
        }
        this.setState({
          data: array,
          isData: true,
        });
      })
      .catch(err => {
        swal('Oops!', 'Something went wrong!', 'error');
      });
  };

  componentWillMount = () => {
    this.getData();
  };

  renderLoadingBubbles = () => (
    <div className="loading-bubbles">
      <ReactLoading type="bubbles" color="#0067dd" height="20%" width="20%" />
    </div>
  );

  render() {
    const { data, activeMore, isData } = this.state;
    return (
      <React.Fragment>
        <Header />
        <div className="body">
          {!isData ? (
            <>{this.renderLoadingBubbles()}</>
          ) : (
            <>
              <HeaderSearch numberOfResult={data.length} />
              <CharityCount />
              <div className="result-cards">
                <CountContext.Consumer>
                  {consumer => {
                    const { charityList, changeActive } = consumer;
                    const charityListId = charityList.map(
                      charity => charity.charityId
                    );
                    const dataActive = data.map(charity => {
                      if (charityListId.includes(charity.idChirty)) {
                        charity.isActive = true;
                      } else {
                        charity.isActive = false;
                      }
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
                        if (charityListId.includes(charity.idChirty)) {
                          charity.isActive = true;
                        } else {
                          charity.isActive = false;
                        }
                        return charity;
                      });

                      return dataActive
                        .slice(5, data.length)
                        .map(item => (
                          <ResultCard
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
            </>
          )}
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default SearchReaslt;
