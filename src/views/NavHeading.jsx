import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledNavHeading = styled.div`

p#myname {
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
    elapsedMins: PropTypes.number
};

const defaultProps = {
    elapsedMins: 0
}

export function NavHeading({ userName, elapsedMins }) {

    return (
        <StyledNavHeading>
            <div id="personal">
                <p id="myname">{userName}</p>
                <p id="elapsed">Online for {elapsedMins} minutes</p>
            </div>
        </StyledNavHeading>

    );
}

NavHeading.propTypes = propTypes;

export default NavHeading;