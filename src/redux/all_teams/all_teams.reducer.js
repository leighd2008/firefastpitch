const INITIAL_STATE = {
  teams: [
    {
      title: "Fire 18U",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/fire-fastpitch.appspot.com/o/teamPics%2F18U_team.jpg?alt=media&token=03814d63-ee1e-49ec-aa19-177b97fd81bc&_gl=1*nuhoft*_ga*MTcxNDQyMjU5MS4xNjc2MjQzMzc4*_ga_CW55HF8NVT*MTY5ODA1OTg4NC4xNTUuMS4xNjk4MDYyNTk0LjU2LjAuMA..",
      id: 4,
      linkUrl: "Fire18U"
    },
    {
      title: "Fire 16U",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/fire-fastpitch.appspot.com/o/teamPics%2F16_Team.jpeg?alt=media&token=e667a906-f4a9-4455-ade3-77de49a2356c&_gl=1*1ms05xg*_ga*MTcxNDQyMjU5MS4xNjc2MjQzMzc4*_ga_CW55HF8NVT*MTY5ODA1OTg4NC4xNTUuMS4xNjk4MDYzMTk5LjUxLjAuMA..",
      id: 3,
      linkUrl: "Fire16U"
    },
    {
      title: "Fire 2007",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/fire-fastpitch.appspot.com/o/teamPics%2F07_team.jpg?alt=media&token=696961a9-1a13-4e46-b2c1-a9eb31ba6a9b&_gl=1*1au7hbq*_ga*MTcxNDQyMjU5MS4xNjc2MjQzMzc4*_ga_CW55HF8NVT*MTY5ODA1OTg4NC4xNTUuMC4w",
      id: 5,
      linkUrl: "Fire2007"
    },
    {
      title: "Fire 2008",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/fire-fastpitch.appspot.com/o/teamPics%2F08_Team.jpg?alt=media&token=b47ab199-f30b-4896-9e7f-473c7b4242bf&_gl=1*1en47zp*_ga*MTcxNDQyMjU5MS4xNjc2MjQzMzc4*_ga_CW55HF8NVT*MTY5ODA1OTg4NC4xNTUuMS4xNjk4MDYzMjc2LjYwLjAuMA..",
      id: 1,
      linkUrl: "Fire2008"
    },
    {
      title: "Fire 2009",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/fire-fastpitch.appspot.com/o/teamPics%2F09_team.jpg?alt=media&token=36c51de6-9c31-4f3e-a0fb-d61430a4b671&_gl=1*y36kb0*_ga*MTcxNDQyMjU5MS4xNjc2MjQzMzc4*_ga_CW55HF8NVT*MTY5ODA1OTg4NC4xNTUuMS4xNjk4MDYzMzAyLjM0LjAuMA..",
      id: 2,
      linkUrl: "Fire2009"
    },
    {
      title: "Fire 2010",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/fire-fastpitch.appspot.com/o/teamPics%2F10_team.jpg?alt=media&token=7cd773b5-2706-4339-a2cf-4f7d07657d81&_gl=1*ov3f1*_ga*MTcxNDQyMjU5MS4xNjc2MjQzMzc4*_ga_CW55HF8NVT*MTY5ODA1OTg4NC4xNTUuMS4xNjk4MDYzMzM0LjIuMC4w",
      id: 6,
      linkUrl: "Fire2010"
    },
    {
      title: "Fire 2011",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/fire-fastpitch.appspot.com/o/teamPics%2F11_team.jpg?alt=media&token=4cf70919-96c2-41c3-aec4-67a8fe990205&_gl=1*tx014i*_ga*MTcxNDQyMjU5MS4xNjc2MjQzMzc4*_ga_CW55HF8NVT*MTY5ODA1OTg4NC4xNTUuMS4xNjk4MDYzMzU4LjYwLjAuMA..",
      id: 7,
      linkUrl: "Fire2011"
    },
    {
      title: "Fire 2012",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/fire-fastpitch.appspot.com/o/teamPics%2F12_team.jpg?alt=media&token=2b91bea5-037f-463a-9358-3aa1dcb2ce12&_gl=1*1k3eqhk*_ga*MTcxNDQyMjU5MS4xNjc2MjQzMzc4*_ga_CW55HF8NVT*MTY5ODA1OTg4NC4xNTUuMS4xNjk4MDYzMzg0LjM0LjAuMA..",
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
