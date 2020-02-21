const INITIAL_STATE = {
  teams: [
    {
      title: "Fire 14U",
      imageUrl: "14U_team2.jpg",
      id: 1,
      linkUrl: "Fire14U"
    },
    {
      title: "Fire 12U",
      imageUrl: "12U_Team.jpg",
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
