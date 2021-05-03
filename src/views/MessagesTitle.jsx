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

  span.my-name {
    color: red;
  }
`;

const propTypes = {
  name: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  users: PropTypes.array.isRequired
};

export function MessagesTitle({ name, users, userName }) {
  let me;
  let others = '';
  const temp = users.filter(user => user !== userName);

  if (temp.length === users.length) {
    others = users.join(', ');
  } else {
    me = userName;
    others = temp.join(', ');
  }

  return (
    <StyledMessagesTitle>
      <p className="room-title">{name}</p>
      <p className="room-users">
        {me && me.length > 0 && <span className="my-name">{me}, </span>}
        <span>{others}</span>
      </p>
    </StyledMessagesTitle>
  );
}

MessagesTitle.propTypes = propTypes;

export default MessagesTitle;
