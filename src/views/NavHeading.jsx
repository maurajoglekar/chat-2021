import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledNavHeading = styled.div`

p#name {
    font-weight: bold;
    font-size: 20px;
    margin-top: 20px;
    height: 10px;
  }

p#elapsed {
    font-size: 12px;
    height: 14px;
    margin-bottom: 40px;
    padding-top: 15px;
  }
`;

const propTypes = {
    userName: PropTypes.string.isRequired,
    startTime: PropTypes.Date,
};

export function NavHeading({ userName, startTime }) {

    const [elapsedMins, setElapsedMins] = useState(0);

    function calculateElapsedMins() {
        const endTime = new Date();
        let timeDiff = endTime - startTime;

        // get elapsed minutes
        const newMins = Math.floor(timeDiff / 60000);

        setElapsedMins(newMins);
    };

    setInterval(calculateElapsedMins, 60000);

    return (
        <StyledNavHeading>
            <div id="personal">
                <p id="name">{userName}</p>
                <p id="elapsed">Online for {elapsedMins} minutes</p>
            </div>
        </StyledNavHeading>

    );
}

NavHeading.propTypes = propTypes;

export default NavHeading;