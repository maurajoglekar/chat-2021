import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledNavHeading = styled.div`
  p.name {
    font-weight: bold;
    font-size: 20px;
    margin-top: 20px;
    height: 10px;
  }

  p.elapsed {
    font-size: 12px;
    height: 14px;
    margin-bottom: 40px;
    padding-top: 15px;
  }
`;

const propTypes = {
  startTime: PropTypes.Date,
  userName: PropTypes.string.isRequired
};

const defaultProps = {
  startTime: new Date()
};
export function NavHeading({ userName, startTime }) {
  const [elapsedMins, setElapsedMins] = useState(0);

  function calculateElapsedMins() {
    const endTime = new Date();
    const timeDiff = endTime - startTime;

    // get elapsed minutes
    const newMins = Math.floor(timeDiff / 60000);

    setElapsedMins(newMins);
  }

  setInterval(calculateElapsedMins, 60000);

  return (
    <StyledNavHeading>
      <p className="name" data-test-id="user-name">
        {userName}
      </p>
      <p className="elapsed" data-test-id="elapsed-time">
        Online for {elapsedMins} minutes
      </p>
    </StyledNavHeading>
  );
}

NavHeading.propTypes = propTypes;
NavHeading.defaultProps = defaultProps;

export default NavHeading;
