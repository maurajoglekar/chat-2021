import React from "react";
import { mount, shallow } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { MemoryRouter } from 'react-router-dom';
import ChatConsole from "./ChatConsole";

import { roomsArray } from "../test/chat-mocks";

const mockStore = configureMockStore([]);
const getStoreWithRooms = mockStore({
  rooms: roomsArray,
});

describe("ChatConsole tests", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(
      <Provider store={getStoreWithRooms}>
        < ChatConsole />
      </Provider>
    );

    wrapper.unmount();
  });

  it("renders chat console with data", () => {

    window.HTMLElement.prototype.scrollIntoView = function() {};
    const wrapper = mount(
        <Provider store={getStoreWithRooms}>
            <MemoryRouter>
                <ChatConsole />
            </MemoryRouter>
        </Provider>
      );

    expect(wrapper.find('NavHeading')).toBeTruthy();
    expect(wrapper.find('NavList')).toBeTruthy();
    expect(wrapper.find('MessagesTitle')).toBeTruthy();
    expect(wrapper.find('MessageList')).toBeTruthy();
    expect(wrapper.find('MessageAddForm')).toBeTruthy();

    wrapper.unmount();
  });
});
