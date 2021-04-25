import PropTypes from "prop-types";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import React, { Component } from "react";

const StyledLoginForm = styled.div`
  .app-header {
    background-color: #fff;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
  }

  input {
    width: 350px;
    height: 30px;
    margin-top: 15px;
    padding: 0 25px;
    color: gray;
  }

  button {
    width: 405px;
    height: 36px;
    margin-top: 15px;
    background-color: #ff3008;
    color: #fff;
    padding: 0 30px;
  }
`;

const propTypes = {
  history: PropTypes.object.isRequired
};

class LoginForm extends Component {
  constructor() {
    super();

    this.gotoChat = this.gotoChat.bind(this);
  }

  gotoChat() {
    if (this._userName.value !== "") {
      this.props.history.push(`chat/${this._userName.value}`);
    }
  }

  render() {
    return (
      <StyledLoginForm>
        <div className="app-header">
          <form id="login-form">
            <div>
              <input
                id="user-name"
                name="userName"
                type="text"
                placeholder="Type your username..."
                ref={(a) => (this._userName = a)}
              />
            </div>
            <button type="submit" onClick={this.gotoChat}>
              Join the DoorDash Chat!
            </button>
          </form>
        </div>
      </StyledLoginForm>
    );
  }
}

LoginForm.propTypes = propTypes;

export default withRouter(LoginForm);
