import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledMessageList = styled.div`
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
    color: ${props => props.isMine ? '#fff' : '#333'};
    background-color: ${props => props.isMine ? '#FF3008' : '#fff'};
    padding: 15px 20px;
    margin-bottom: 10px;
    border-radius: ${props => !props.isMine ? '10px 100px / 120px' : '2em'};
  }

.messageItem  .messagedBy {
    color: gray;
    padding: 5px 10px 5px;
    margin-bottom: 10px;
    border-radius: 30px;
    font-size: 12px;
  }
`;

const propTypes = {
    messages: PropTypes.array.isRequired,
    userName: PropTypes.string.isRequired
};

export function MessageList({ messages, userName }) {
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
        </StyledMessageList>

    );
}

MessageList.propTypes = propTypes;

export default MessageList;