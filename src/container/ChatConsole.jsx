import React, {Component} from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import ChatContent from "../views/ChatContent";
import Nav from "../views/Nav";
import { connect } from "react-redux";
import {
  getRooms as getRoomsAction,
  getRoom as getRoomAction,
  getRoomMessages as getRoomMessagesAction,
  addRoomMessage as addRoomMessageAction
} from "../redux/actions";

const StyledChatConsole = styled.div`
  display: flex;
  min-height: 100vh;

  section {
    width: 100%;
    background-color: #ffffff;
  }
`;

const propTypes = {
  match: PropTypes.object.isRequired,
  rooms: PropTypes.array,
  getRooms: PropTypes.func,
  getRoom: PropTypes.func,
  getRoomMessages: PropTypes.func,
  addRoomMessage: PropTypes.func
};

const defaultProps = {
  rooms: [],
  getRooms: () => null,
  getRoom: () => null,
  getRoomMessages: () => null,
  addRoomMessage: () => null
};

const URL = 'ws://localhost:3030';

class ChatConsole extends Component {

  constructor() {
     super();

     this.ws = new WebSocket(URL);

     this.state = {
        roomId: 0
     };
  }

  setRoomId = newRoomId =>
     this.setState({roomId: newRoomId});


  componentDidMount() {

      const { addRoomMessage } = this.props;

      this.ws.onopen = () => {
          // on connecting, do nothing but log it to the console
          console.log('connected')
      };

      this.ws.onmessage = evt => {
          // on receiving a message from someone in the chat
          const { message, userName, fromRoom }  = JSON.parse(evt.data);
          addRoomMessage({
              roomId: fromRoom,
              name: userName,
              message: message
          });
      };

      this.ws.onclose = () => {
          console.log('disconnected');
          // automatically try to reconnect on connection loss
          this.setState({
              ws: new WebSocket(URL),
          })
      }
  }

  render() {

        const { rooms,
            getRooms,
            getRoom,
            getRoomMessages,
            addRoomMessage, match} = this.props;
        const { userName } = match.params;
        const { roomId,} = this.state;

        return (
            <StyledChatConsole>
                <Nav
                    getRooms={getRooms}
                    rooms={rooms}
                    setRoomId={this.setRoomId}
                    roomId={roomId}
                    userName={userName}
                ></Nav>
                <section>
                    <ChatContent
                        userName={userName}
                        roomId={roomId ? roomId : 0}
                        getRoom={getRoom}
                        getRoomMessages={getRoomMessages}
                        rooms={rooms}
                        addRoomMessage={addRoomMessage}
                        ws={this.ws}
                    />
                </section>
            </StyledChatConsole>
        );
    }
}
ChatConsole.propTypes = propTypes;
ChatConsole.defaultProps = defaultProps;

const mapStateToProps = ({ rooms }) => {
  return {
    rooms: rooms || []
  };
};

export default connect(mapStateToProps, {
  getRooms: getRoomsAction,
  getRoom: getRoomAction,
  getRoomMessages: getRoomMessagesAction,
  addRoomMessage: addRoomMessageAction
})(withRouter(ChatConsole));
