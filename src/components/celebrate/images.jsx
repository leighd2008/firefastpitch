
const images = require.context("../../assets/Homeruns", true);

const imgUrls = [
  images('./Hailey_3rd_dinger_14U_Summer_2021.jpg'),
  images('./Brena_1st_04_04_21_12U_Spring_2021.jpeg'),
  images(`./Cloe_4th_dinger_16U_Fall_2020.jpg`),
  images(`./Cloe_2cnd&3rd_dingers_16U_Fall_2020.jpg`),
  images(`./Avery_2cnd&Hailey_1st_dinger_14U_Fall_2020.jpg`),
  images(`./Hailey_1st_dinger_14U_Fall_2020.jpg`),
  images(`./Avery_1st_dinger_14U_Fall_2020.jpg`),
  images(`./Cloe_1st_dinger_16U_Fall_2020.jpg`),
  // images(`./MadisonZiegler_1st_dinger_14U_Spring_2020.jpg`),
  // images(`./JenniferGriffin_1st_dinger_14U_Spring_2020.jpg`),
  images(`./Cloe_2cnd_dinger_14U_Spring_2020.jpg`),
  images(`./Cloe_1st_dinger_14U_Spring_2020.jpg`),

];

export { imgUrls }