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

export function MessagesTitle({ name, users, userName }) {
    let userString = '';
    const myIndex = users.indexOf(userName);
    if (myIndex === -1) {
       userString =  users.join(', ')
    } else {
        const me = users.splice(myIndex, 1);
    }
    return (
        <StyledMessagesTitle>
            <p className="room-title">{name}</p>
            <p className="room-users">{userString}</p>
        </StyledMessagesTitle>

    );
}

MessagesTitle.propTypes = propTypes;

export default MessagesTitle;