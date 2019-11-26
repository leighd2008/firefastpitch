import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/checkout-item/checkout-item";
import OrderForm from "../../components/order_form/order_form";
import FormInput from "../../components/form-input/form-input";
import CustomButton from "../../components/custom-button/custom-button";

import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart.selectors";

import "./checkoutPage.scss";

class CheckoutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderName: "",
      orderEmail: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { orderName, orderEmail } = this.state;
    console.log(orderName, orderEmail, this.props.cartItems);
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { cartItems, total } = this.props;
    return (
      <div className="checkout-page">
        <div className="checkout-header">
          <div className="image">
            <span>Product</span>
          </div>
          <div className="title">
            <span>Description</span>
          </div>
          <div className="color">
            <span>Color</span>
          </div>
          <div className="size">
            <span>Size</span>
          </div>
          <div className="quantity">
            <span>Quantity</span>
          </div>
          <div className="price">
            <span>Price</span>
          </div>
          <div className="remove">
            <span>Remove</span>
          </div>
        </div>
        {cartItems.map(cartItem => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <div className="total">
          <span>TOTAL: ${total}</span>
        </div>
        <form className="my-order-form" onSubmit={this.handleSubmit}>
          {/* <h2 className="title">My Order</h2> */}
          <FormInput
            type="text"
            name="orderName"
            value={this.state.orderName}
            handleChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="orderEmail"
            value={this.state.orderEmail}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          {cartItems.map(cartItem => (
            <OrderForm key={cartItem.id} cartItem={cartItem} />
          ))}

          <CustomButton
            type="submit"
            // onClick={() => {
            //   console.log(
            //     cartItems,
            //     this.state.orderName,
            //     this.state.orderEmail
            //   );
            //   // history.push("/checkout");
            //   // dispatch(toggleCartHidden());
            // }}
          >
            Add to Team Order
          </CustomButton>
        </form>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);

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
      id: "2 - YXS",
      name: "YXS"
    },
    {
      id: "3 - YS",
      name: "YS"
    },
    {
      id: "4 - YM",
      name: "YM"
    },
    {
      id: "5 - YL",
      name: "YL"
    },
    {
      id: "6 - YXL",
      name: "YXL"
    },
    {
      id: "7 - XS",
      name: "XS"
    },
    {
      id: "8 - S",
      name: "S"
    },
    {
      id: "9 - M",
      name: "M"
    },
    {
      id: "10 - L",
      name: "L"
    },
    {
      id: "11 - XL",
      name: "XL"
    },
    {
      id: "12 - 2XL",
      name: "2XL"
    },
    {
      id: "13 - 3XL",
      name: "3XL"
    },
    {
      id: "14 - 4XL",
      name: "4XL"
    },
    {
      id: "15 - 5XL",
      name: "5XL"
    },
    {
      id: "16 - 6XL",
      name: "6XL"
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

import React from "react";

import FormInput from "../form-input/form-input";
// import CustomButton from "../custom-button/custom-button";

// import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./order_form.scss";

const OrderForm = ({ cartItem }) => {
  const { title, price, color, size } = cartItem;

  return (
    <div className="order-form">
      {/* <span>Sign up with your email and password</span> */}
      {/* <form className="order-form"> */}
      <FormInput
        type="text"
        name="title"
        value={title}
        readOnly={true}
        // onChange={this.handleChange}
        // label="title"
        required
      />
      <FormInput
        type="text"
        name="price"
        value={`$${price}`}
        readOnly={true}
        // onChange={this.handleChange}
        // label="price"
        required
      />
      <FormInput
        type="text"
        name="color"
        value={color}
        readOnly={true}
        // onChange={this.handleChange}
        // label="color"
        required
      />
      <FormInput
        type="text"
        name="size"
        value={size}
        readOnly={true}
        // onChange={this.handleChange}
        // label="size"
        required
      />
      {/* <CustomButton type="submit">Add to Team Order</CustomButton> */}
      {/* </form> */}
    </div>
  );
};

export default OrderForm;

.order - form {
  display: flex;
  flex - direction: row;
  width: 100 %;

  .title {
    margin: 10px 0;
  }
}


