
import React, { useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledMessageList = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;
  height: calc(100vh - 250px);
  background-color: #f5f5f5;

ul.messageList {
    list-style: none;
    padding-left: 0;
    margin-left: 30px;
    width: 95%;
    font-size: 20px;
  }
`;

const StyledListItem = styled.li`
display: flex;
justify-content: ${props => props.isMine ? 'flex-end' : 'flex-start'};

.messageItem {
    max-width: 50%;
    width: max-content;
}

.messageItem .messageText {
    color: ${props => props.isMine ? '#FAF0E6' : 'gray'};
    background-color: ${props => props.isMine ? '#FF3008' : '#fff'};
    padding: 15px 20px;
    border-radius: 2em;
    margin-bottom: 0;
  }

.messageItem  .messagedBy {
    color: gray;
    padding: 5px;
    margin-bottom: 10px;
    margin-top: 5px;
    border-radius: 30px;
    font-size: 18px;
  }
`;

const propTypes = {
    messages: PropTypes.array.isRequired,
    userName: PropTypes.string.isRequired
};

export function MessageList({ messages, userName }) {

    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    };
    useEffect(scrollToBottom, [messages]);

    return (
        <StyledMessageList>
            <ul className="messageList">
                {messages.map((m) => (
                    <StyledListItem key={m.id} isMine={userName === m.name}>
                        <div className="messageItem">
                            <p className="messageText">{m.message}</p>
                            {userName !== m.name && (<p className="messagedBy">{m.name}</p>)}
                        </div>
                    </StyledListItem>
                ))}
            </ul>
            <div ref={messagesEndRef} />
        </StyledMessageList>

    );
}

MessageList.propTypes = propTypes;

export default MessageList;