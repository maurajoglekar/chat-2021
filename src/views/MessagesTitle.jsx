import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledMessagesTitle = styled.div`
.room-title {
    text-align: center;
    font-size: 25px;
  }

  .room-users {
    text-align: center;
  }
`;

const propTypes = {
    name: PropTypes.string.isRequired,
    users: PropTypes.array.isRequired,
    userName: PropTypes.string.isRequired
};

const usersList = (me, others) => (
    <div>
        <span>{me}</span>
        <span>{others}</span>
    </div>
);

export function MessagesTitle({ name, users, userName }) {

    const myIndex = users.indexOf(userName);
    const inRoom = myIndex !== -1;
    let me = userName;
    let others = '';
    
    if (inRoom) {
        delete users[myIndex];
    }
    others = users.join(', ');

    return (
        <StyledMessagesTitle>
            <p className="room-title">{name}</p>
            <p className="room-users">{usersList(me, others)}</p>
        </StyledMessagesTitle>

    );
}

MessagesTitle.propTypes = propTypes;

export default MessagesTitle;