const INITIAL_STATE = {
  teams: [
    {
      title: "Fire 14U",
      imageUrl:
        "https://images.unsplash.com/photo-1507245991864-a005497bdab8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      id: 1,
      linkUrl: "Fire14U"
    },
    {
      title: "Fire 12U",
      imageUrl:
        "https://images.unsplash.com/photo-1553270040-8e90b62a94f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
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
