import React, {useEffect, useState} from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledMyFunctionComponentWithHooks = styled.div`

`;

const propTypes = {
    data: PropTypes.object
};

const defaultProps = {
    data: {
        message: 'Hello World!'
    }
};

function MyFunctionComponentWithHooks({ data }) {

    const [count, setCount] = useState(0);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
    });
    const { message } = data;

    return (
        <StyledMyFunctionComponentWithHooks>
            <p>{message}</p>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </StyledMyFunctionComponentWithHooks>
    );
}

MyFunctionComponentWithHooks.propTypes = propTypes;
MyFunctionComponentWithHooks.defaultProps = defaultProps;

export default MyFunctionComponentWithHooks;