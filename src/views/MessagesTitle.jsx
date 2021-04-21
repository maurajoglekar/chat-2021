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

const StyledUsersList = styled.div`
span.my-name {
    color: red;
}
`;

const propTypes = {
    name: PropTypes.string.isRequired,
    users: PropTypes.array.isRequired,
    userName: PropTypes.string.isRequired
};

const usersList = (me, others) => (
    <StyledUsersList>
        <span className="my-name">{me}</span>
        {me && me.length > 0 && <span>, </span>}
        <span>{others}</span>
    </StyledUsersList>
);

export function MessagesTitle({ name, users, userName }) {

    let me, others = '';
    let temp = users.filter(user => user !== userName);

    if (temp.length === users.length) {
        others = users.join(', ');
    } else {
        me = userName;
        others = temp.join(', ')
    }

    return (
        <StyledMessagesTitle>
            <p className="room-title">{name}</p>
            <p className="room-users">{usersList(me, others)}</p>
        </StyledMessagesTitle>

    );
}

MessagesTitle.propTypes = propTypes;

export default MessagesTitle;