const INITIAL_STATE = {
  teams: [
    {
      title: "Fire 18U",
      imageUrl: "Fire_mascot.jpg",
      id: 4,
      linkUrl: "Fire16U"
    },
    {
      title: "Fire 16U",
      imageUrl: "16U_Team.jpg",
      id: 3,
      linkUrl: "Fire16U"
    },
    {
      title: "Fire 2007",
      imageUrl: "07_team.jpg",
      id: 5,
      linkUrl: "Fire2007"
    },
    {
      title: "Fire 2008",
      imageUrl: "08_Team.jpg",
      id: 1,
      linkUrl: "Fire2008"
    },
    {
      title: "Fire 2009",
      imageUrl: "Fire_mascot.jpg",
      id: 2,
      linkUrl: "Fire2009"
    },
    {
      title: "Fire 2010",
      imageUrl: "Fire_mascot.jpg",
      id: 6,
      linkUrl: "Fire2010"
    },
    {
      title: "Fire 2011",
      imageUrl: "Fire_mascot.jpg",
      id: 7,
      linkUrl: "Fire2011"
    },
    {
      title: "Fire 2012",
      imageUrl: "Fire_mascot.jpg",
      id: 8,
      linkUrl: "Fire2012"
    }
  ]
};

const all_teamsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default all_teamsReducer;
