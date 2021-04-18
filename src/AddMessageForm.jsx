import PropTypes from 'prop-types';
import styled from 'styled-components';
import React, { Component } from "react";

const StyledAddMessageForm = styled.div`
form input {
    width: 80%;
    margin: 50px 30px;
    height: 30px;
    padding: 10px 25px;
    font-size: 16px;
    color: gray;
    border: #BDBDBD solid 2px;
}

form button {
    width: 10%;
    height: 30px;
    padding: 20px 10px;
    font-size: 28px;
    background-color: #FFF;
    border: #FFF solid 0px;
    color: #6495ED;
    font-weight: bold;
}
`;

class AddMessageForm extends Component {

    constructor() {
        super();

        this.addMessage = this.addMessage.bind(this);
    }

    addMessage() {
        const { userName, addRoomMessage } = this.props;
        if (this._newMessage.value !== "") {
            addRoomMessage({name : userName, message: this._newMessage.value})
        }
    };

    render() {
        return (
            <StyledAddMessageForm>
                <form id="add-message-form">
                        <input
                            id="message"
                            name="message"
                            type="text"
                            placeholder="Type a message..."
                            ref={a => (this._newMessage = a)}
                        />
                    <button type="submit" onClick={this.addMessage}>
                        Send
                    </button>
                </form>
            </StyledAddMessageForm>
        );
    }
}


export default AddMessageForm;