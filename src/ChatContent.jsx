import React from "react";
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const StyledChatContent = styled.div`

section#title {
  height: 100px;
  background-color: #ffffff;
  border-bottom: 1px solid #E0E0E0;
} 

section#messages {
  height: calc(100vh - 200px);
  background-color: #f5f5f5;
;
} 

section#addMessage {
  height: 100px;
  background-color: #ffffff;
  border-top: 1px solid #E0E0E0;
} 
`;

const propTypes = {
  room: PropTypes.number
};

const defaultProps = {
};

function ChatContent({ room }) {

  return (
    <StyledChatContent>
      <section id="title">
        <p>Business</p>
        <p> list of users</p>
      </section>
      <section id="messages">
        <p>Messages here</p>
      </section>
      <section id="addMessage">
        <p>input box and button</p>
      </section>
    </StyledChatContent>
  );
}

ChatContent.propTypes = propTypes;
ChatContent.defaultProps = defaultProps;

export default ChatContent;