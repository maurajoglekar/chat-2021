import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledMyFunctionComponent = styled.div`

`;

const propTypes = {
    data: PropTypes.object
};

const defaultProps = {
    data: {
        message: 'Hello World!'
    }
};

function MyFunctionComponent({ data }) {

    const { message } = data;

    return (
        <StyledMyFunctionComponent>
           <p>{message}</p>
        </StyledMyFunctionComponent>
    );
}

MyFunctionComponent.propTypes = propTypes;
MyFunctionComponent.defaultProps = defaultProps;

export default MyFunctionComponent;