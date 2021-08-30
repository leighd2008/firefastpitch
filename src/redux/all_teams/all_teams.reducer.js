const INITIAL_STATE = {
  teams: [
    {
      title: "Fire 18U",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/fire-fastpitch.appspot.com/o/teamPics%2F18U_team.jpg?alt=media&token=96e4abae-9ad2-45ff-bc36-c6953813c1ee",
      id: 4,
      linkUrl: "Fire16U"
    },
    {
      title: "Fire 16U",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/fire-fastpitch.appspot.com/o/teamPics%2F16U_Team.jpg?alt=media&token=d7c5e9d5-93b0-4528-b133-8ef991aee0e5",
      id: 3,
      linkUrl: "Fire16U"
    },
    {
      title: "Fire 2007",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/fire-fastpitch.appspot.com/o/teamPics%2F07_team.jpg?alt=media&token=70e29661-6fcf-4cb2-b944-4f1c6e359e64",
      id: 5,
      linkUrl: "Fire2007"
    },
    {
      title: "Fire 2008",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/fire-fastpitch.appspot.com/o/teamPics%2F08_Team.jpg?alt=media&token=8ec0f146-421e-40af-93c3-323191144a8c",
      id: 1,
      linkUrl: "Fire2008"
    },
    {
      title: "Fire 2009",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/fire-fastpitch.appspot.com/o/teamPics%2F09_team.jpg?alt=media&token=e5305f7e-2cec-403d-9bc9-8bce39a2d0c6",
      id: 2,
      linkUrl: "Fire2009"
    },
    {
      title: "Fire 2010",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/fire-fastpitch.appspot.com/o/teamPics%2F10_team.jpg?alt=media&token=e7347a8a-6209-410d-bba9-344182c04211",
      id: 6,
      linkUrl: "Fire2010"
    },
    {
      title: "Fire 2011",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/fire-fastpitch.appspot.com/o/teamPics%2F11_team.jpg?alt=media&token=16d63e87-0e53-4c4f-8504-ddd391221702",
      id: 7,
      linkUrl: "Fire2011"
    },
    {
      title: "Fire 2012",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/fire-fastpitch.appspot.com/o/teamPics%2F12_team.jpg?alt=media&token=b3f3bab3-7f6c-47f7-9d61-917a60a87d16",
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
