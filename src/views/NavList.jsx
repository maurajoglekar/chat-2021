import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledNavList = styled.div`

  p {
    height: 48px;
  }

  p.selected-room {
    background-color: #8b0000;
  }
`;

const propTypes = {
    rooms: PropTypes.array.isRequired,
    setRoomId: PropTypes.func.isRequired,
    roomId: PropTypes.number.isRequired,
};

export function NavList({ rooms, roomId, setRoomId}) {

    const sortedRooms = rooms.sort(function (a, b) {
        return "".concat(a.name).localeCompare(b.name);
    });

  return (
    <StyledNavList>
        {sortedRooms.map((room) => (
            <p className={room.id === roomId ? "selected-room" : ""} key={room.id} onClick={() => setRoomId(room.id)}>
                {room.name}
            </p>
        ))}
    </StyledNavList>
  );
}

NavList.propTypes = propTypes;

export default NavList;
