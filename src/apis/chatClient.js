import NetworkClient from './network-client';

class ChatClient extends NetworkClient {
  constructor() {
      super('');
  }

  getRooms() {
    return this.get('/rooms');
  }

  getRoom(roomId) {
    return this.get(`/rooms/${roomId}`);
  }

  getRoomMessages(roomId) {
    return this.get(`/rooms/${roomId}/messages`);
  }

  addRoomMessage(roomId, name, message) {
    const dataObj = {
      name,
      message
    };

    return this.post(`/rooms/${roomId}/messages`, {
      data: dataObj
    });
  }

}

const chatClient = new ChatClient();
export default chatClient;