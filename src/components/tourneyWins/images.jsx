const images = require.context("../../assets/Tourney wins", true);

const imgUrls = [
  images('./Phantoms_Salute_To_Service_2021_2cnd_place.jpeg'),
  images('./Spring_Swing_2021_Champion.jpeg'),
];

export { imgUrls }