const INITIAL_STATE = {
  teams: [
    {
      title: "Fire 16U",
      imageUrl: "16U_Team.jpg",
      id: 3,
      linkUrl: "Fire16U"
    },
    {
      title: "Fire '07'",
      imageUrl: "07_team.jpg",
      id: 1,
      linkUrl: "Fire14U"
    },
    {
      title: "Fire 12U",
      imageUrl: "08_Team.jpg",
      id: 2,
      linkUrl: "Fire12U"
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
