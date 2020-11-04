import React from "react";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";

// import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import "./membersOnlyLogin.scss";

class MembersOnlyLogin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // email: "",
      fffpassword: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    const { /*email,*/ fffpassword } = this.state;
    
    // eslint-disable-next-line no-unused-expressions
    fffpassword === 'fffpassword' ? window.location = 'MembersOnly' :
      (this.setState({ fffpassword: "" }),
        alert(`Invalid Password `)
      );
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { handleChange, handleSubmit } = this;
    const { /*email,*/ fffpassword } = this.state;

    return (
      <div className="login">
        <h1 className="members-only">Fire Fastpitch Family Login</h1>

        <form onSubmit={handleSubmit}>
          <FormInput
            name="fffpassword"
            type="password"
            autoComplete="fffpassword"
            value={fffpassword}
            handleChange={handleChange}
            label="password"
            required
          />
            <button type="submit"> Log In </button>
        </form>
      </div>
    );
  }
}

export default MembersOnlyLogin;
