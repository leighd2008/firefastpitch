import { FangearActionTypes } from "./fangear.types";

const INITIAL_STATE = {
  fangear: [
    {
      item_num: "",
      color: "",
      title: "Hats",
      image: "hats.jpg",
      id: 1,
      price: "25",
      linkUrl: "",
      imagesize: "large",
      size: ""
    },
    {
      item_num: "",
      color: "",
      title: "T-shirt",
      image: "red_T.jpg",
      id: 2,
      price: "20",
      linkUrl: "",
      size: ""
    },
    {
      item_num: 5400,
      color: "",
      title: "Long Sleeve T- Shirt",
      image: "black_lng_slv_T.jpg",
      id: 3,
      price: "25",
      linkUrl: "",
      size: ""
    },
    {
      item_num: "",
      color: "",
      title: "Crewneck Sweatshirt",
      image: "red_sweatshirt.jpg",
      id: 4,
      price: "30",
      linkUrl: "",
      size: ""
    },
    {
      item_num: "18500",
      color: "",
      title: "Hooded Sweatshirt",
      image: "black_hoodie.jpg",
      id: 5,
      price: "35",
      linkUrl: "",
      size: ""
    },
    {
      item_num: "",
      color: "",
      title: "Jersey",
      image: "white_jersey.jpg",
      id: 6,
      price: "40",
      linkUrl: "",
      size: ""
    }
  ],
  colors: [
    {
      id: "1 - default",
      name: "Please Select a Color"
    },
    {
      id: "2 - red",
      name: "Red"
    },
    {
      id: "3 - black",
      name: "Black"
    },
    {
      id: "4 - white",
      name: "White"
    }
  ],
  sizes: [
    {
      id: "1 - default",
      name: "Please Select a Size"
    },
    {
      id: "2 - small",
      name: "Small"
    },
    {
      id: "3 - medium",
      name: "Medium"
    },
    {
      id: "4 - large",
      name: "Large"
    },
    {
      id: "5 - x-large",
      name: "X-Large"
    },
    {
      id: "6 - xx-large",
      name: "XX-Large"
    },
    {
      id: "7 - xxx-large",
      name: "XXX-Large"
    }
  ]
};

const fangearReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FangearActionTypes.CHOOSE_COLOR:
      return {
        ...state,
        color: action.payload
      };
    case FangearActionTypes.CHOOSE_SIZE:
      return {
        ...state,
        size: action.payload
      };
    default:
      return state;
  }
};

export default fangearReducer;
