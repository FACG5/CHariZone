const CategoryDetailsData = [
  {
    id: 1,
    name: 'Animals',
    background: '',
    issue:
      'Animal welfare, rights, and protection is one of the most popular issue areas to which individual donors give. Many experts spoke of the importance of protecting animals similar to protecting the marginalized in society. Without human support, many animals face abuse, neglect, and suffering.',
    scopeOfWork:
      'The scope of work covers: Companion animals, Farm animals, Animals used for research and Wildlife animals.',
    activities:
      'Types of non-profits activities might include advocacy, legislative, education, regulatory, or direct services (shelters, animal rescue, and sanctuaries).',
  },
  {
    id: 2,
    name: 'Environment',
    background:
      'https://4.bp.blogspot.com/-ROnWL86mQdw/Vtw_VDp7LFI/AAAAAAAAAWM/XZ5GvjEOex8/w1200-h630-p-k-no-nu/491241354_640.jpg',
    issue:
      'The average temperature of the Earth’s surface has increased by about 1.2 to 1.4ºF since 1900, and with that has come a host of changes in other aspects of climate such as precipitation and storminess. Climate change affects people, plants, and animals in a variety of ways, and scientists have observed that some changes are already occurring. ',
    scopeOfWork:
      'Nonprofits address the issue from various perspectives, including the environment, energy use, and sustainability.',
    activities:
      'They could also utilize a variety of approaches including conservation, education, research, policy, and advocacy.',
  },
  {
    id: 3,
    name: 'Overseas Aid and Relief',
    background:
      'https://www.thebulletin.be/sites/default/files/20130405_aid.jpg',
    issue:
      'Disaster relief and recovery efforts is one of the most popular issues individual donors donate to. The number of natural disasters has increased exponentially with growing populations in disaster prone areas (i.e. coastal areas). In total, nearly one third of the world’s population has been affected, and millions have lost their lives. These tragic events (natural and man-made) destroy infrastructure, cause population displacement, and fundamentally undermine the fabric of sustainable development and human security (Source: United Nations Environment Programme).',
    scopeOfWork:
      'Nonprofits being recommended can be working in one or more of the following areas: health, food, shelter, water, sanitation, security, medicine, non-food items (pots, pans, water containers, etc.), technical assistance, and other areas.',
    activities:
      'Charities intervene at the difference stages of a disaster response, preparation, and recovery efforts. Both natural and man-made  disasters ( war displacement disasters) are very similar in terms of the intervention.',
  },
  {
    id: 4,
    name: 'Homelessness',
    background: 'https://www.gazetteseries.co.uk/resources/images/8146699/',
    issue:
      'The issue of modern homelessness is broad and complex, affecting too many of our neighbours and communities. Those considered eligible for homelessness services are  Individuals (Adults or children) or families who are currently without housing or will be without housing in 14 days (i.e. eviction) or if their current housing situation is life-threatening (i.e. domestic violence). ',
    scopeOfWork:
      "Charities in this space work with various circumstances such as  can't afford housing, working but in poverty, unable to find work, personal hardship and/or physically or mentally ill",
    activities:
      'Nonprofits providing homes first as a stable foundation. Empowering individuals with choices and training. Alleviating symptoms with supportive resources',
  },
  {
    id: 5,
    name: 'Medical Research',
    background: 'http://neuroser.pt/wp-content/uploads/2015/05/Saber-copy.jpg',
    issue:
      "Medical Research Charities mission is to support the discovery of successful treatments and cures for some of life's most dreaded diseases. ",
    scopeOfWork: 'Targeted diseases.',
    activities: 'dedicated to research, prevention, education and advocacy.',
  },
  {
    id: 6,
    name: 'Disability',
    background:
      'http://contents.runda.jp/988/17/07/31/o/f89a54388433bb5a2d9dca6ca6462271631ef591.jpg',
    issue:
      'Disability is not always seen! Collectively, people with disabilities constitute the nation’s largest minority group, and the only minority group of which any of us can become a member at any time. What’s more, people with disabilities are among the most marginalized groups in the world',
    scopeOfWork:
      'Nonprofits support people with any of the following: developmental disabilities, physical disabilities, mental disabilities, blindness and deafness',
    activities:
      'There is wide range of services that charities provide such as transportation, health care, housing, employment, and other services. Additional charitable activities might include research, advocacy, legislative, or education.',
  },
  {
    id: 7,
    name: 'Hospitals & Hospices',
    background:
      'data:image/jpeg;base64,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',
    issue:
      'HospicThe scope: e care seeks to improve the quality of life and wellbeing of adults and children with a life-limiting or terminal illness, helping them live as fully as they can for the precious time they have left. It aspires to be accessible to all who could benefit and reflect personal preferences and needs.',
    scopeOfWork:
      'Hospice care is provided in a wide range of settings, not just hospice buildings. These include day services, care homes and people’s own homes. The vast majority of hospice care is provided in people’s homes. ',
    activities:
      'Hospices provide a range of services which include: pain and symptom control, psychological and social support, rehabilitation, complementary therapies, such as massage and aromatherapy, counselling, spiritual care, practical and financial advice and support in bereavement.',
  },
  {
    id: 8,
    name: 'Children',
    background:
      'https://scontent-atl3-1.cdninstagram.com/vp/6b724bbdc626ac385e4ecf83d6a64e07/5C478178/t51.2885-15/e35/41673102_619176878485187_542926508057165840_n.jpg',
    issue:
      'Children are the world’s most valuable resource and its best hope for the future, yet they are the most vulnerable. Every child deserves to be Safe, Happy and Secure and given the chance to reach their potential',
    scopeOfWork:
      'Charites are focused on bring out the very best in every child whether the issue is child poverty, disability/illness or abuse (sexual exploitation, domestic violence or bullying)',
    activities:
      'Charities direct services are rescue, health, education, mental wellbeing, homes, support or recreational activities. In addition to these services, charities are extensively involved in campaigning and policy.',
  },
  {
    id: 9,
    name: 'General',
    background:
      'http://img.chuansong.me/mmbiz/56tptiaa4SVC6rgDHjmGKRvyE1bTu0GoyBIkjRnMqY8kNLtaDyURsZXian9l53RAnTqFiaTtl4CdSia4E5tz0cU6vA/0?wx_fmt=jpeg',
    issue: 'A list of all charities ',
    scopeOfWork: null,

    activities: null,
  },
  {
    id: 10,
    name: 'Education',
    background:
      'https://www.theteam.co.uk/wp-content/uploads/2016/05/mona-foundation-women.jpg',
    issue: 'For the public benefit to promote learning for pleasure by people no longer in full time employment through the continued development of their individual capabilities, competencies, skills and understanding in subjects of educational value.',
    scopeOfWork: null,

    activities: null,
  },
];
export default CategoryDetailsData;
