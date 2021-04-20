import React, { Component } from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledMyClassComponentWithState = styled.div`

`;

const propTypes = {
    data: PropTypes.object
};

const defaultProps = {
    data: {
        message: 'Hello World!'
    }
};

export class MyClassComponentStateLifeCycles extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {}
        }
    }

    componentDidMount() {
        const {
            myprops
        } = this.props;


        this.setState({
            data: {
                message: 'Hello World!'
            }
        });
    }

    componentDidUpdate(prevProps) {
        const {myprops} = this.props;
        //...
    }

    componentWillUnmount() {
        //clearInterval(this.clearInterval);
    }

    render() {
        const {myprops} = this.props;
        const {  data : { message } } = this.state;

        return (
            <StyledMyClassComponentWithState>
                <p>{message}</p>
            </StyledMyClassComponentWithState>
        );
    }
}

MyClassComponentStateLifeCycles.propTypes = propTypes;
MyClassComponentStateLifeCycles.defaultProps = defaultProps;