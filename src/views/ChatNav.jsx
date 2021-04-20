import React, { Component } from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NavHeading from "./NavHeading";

const StyledChatNav = styled.nav`

  width: 20%;
  background-color: #FF3008;

p {
  width: 48px;
  height: 48px;
  margin: 10px;
  color: #FAF0E6;
  padding-left: 25px;
}

`;

const propTypes = {
    getRooms: PropTypes.function,
    rooms: PropTypes.array,
    setRoomId: PropTypes.function,
    roomId: PropTypes.number.isRequired,
    userName: PropTypes.string.isRequired,
    startTime: PropTypes.Date
};

const defaultProps = {
    getRooms: () => null,
    rooms: [],
    setRoomId: () => null,
    startTime: new Date()
};

export class ChatNav extends Component {

    componentDidMount() {
        const { getRooms } = this.props;
        getRooms();
    }

    render() {
        const { rooms, setRoomId, roomId, userName, startTime } = this.props;

        const sortedRooms = rooms.sort(function (a, b) {
            return "".concat(a.name).localeCompare(b.name);
        });

        return (
            <StyledChatNav>
                <NavHeading userName={userName} startTime={startTime}></NavHeading>
                {sortedRooms.map(room =>
                    <p className={room.id === roomId ? 'selected-room' : ''} key={room.id}
                       onClick={() => setRoomId(room.id)}>{room.name}</p>)}
            </StyledChatNav>
        );
    }
}

ChatNav.propTypes = propTypes;
ChatNav.defaultProps = defaultProps;

export default ChatNav;