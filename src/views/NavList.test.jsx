import React from 'react';
import { shallow } from 'enzyme';
import { roomsArray } from '../test/chat-mocks';
import { NavList } from './NavList';

describe('NavList component', () => {
    const minprops = {
        roomId: 0,
        rooms: roomsArray,
        setRoomId: jest.fn()
    };

    it('renders nav list', () => {
        const wrapper = shallow(<NavList {...minprops} />);

        // console.log(wrapper.debug());
        expect(wrapper.find('[data-test-id="room-name-1"]').text()).toEqual('Coffee Chats');
        expect(wrapper.find('[data-test-id="room-name-0"]').text()).toEqual('Tea Chats');

        wrapper.unmount();
    });
});