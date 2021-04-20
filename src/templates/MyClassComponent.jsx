import styled from 'styled-components';
import React, { Component } from "react";

const StyledMyClassComponent = styled.div`

`;

class MyClassComponent extends Component {

    constructor() {
        super();

        this.state = {
            message: ''
        };
        this.updateMessage = this.updateMessage.bind(this);
    }

    updateMessage(e) {
        this.setState({ message: this._newMessage });
    };

    render() {

        const { message} = this.state;
        return (
            <StyledMyClassComponent>
                <form className="add-message-form">
                    <input
                        id="message"
                        name="message"
                        type="text"
                        placeholder="Type a message..."
                        ref={a => (this._newMessage = a)}
                    />
                    <button type="submit" onClick={this.addMessage}>
                        Update
                    </button>
                </form>
                <p>{message}</p>
            </StyledMyClassComponent>
        );
    }
}


export default MyClassComponent;