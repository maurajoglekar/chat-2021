import React from 'react';
import { shallow } from 'enzyme';
import { MessagesTitle } from './MessagesTitle';

describe('MessagesTitle component', () => {

    it('renders chat title without self', () => {
        const minprops = {
            name: "Tea Chats",
            userName: "Josh",
            users: ["Ryan", "Nick", "Danielle"]
        };
        const wrapper = shallow(<MessagesTitle {...minprops} />);

        //console.log(wrapper.debug());
        expect(wrapper.find('[data-test-id="room-title"]').text()).toEqual('Tea Chats');
        expect(wrapper.find('[data-test-id="room-users"]').find('[data-test-id="others"]').text()).toEqual('Ryan, Nick, Danielle');

        wrapper.unmount();
    });

    it('renders chat title with self', () => {
        const minprops = {
            name: "Tea Chats",
            userName: "Danielle",
            users: ["Ryan", "Nick", "Danielle"]
        };
        const wrapper = shallow(<MessagesTitle {...minprops} />);

        expect(wrapper.find('[data-test-id="room-title"]').text()).toEqual('Tea Chats');
        expect(wrapper.find('[data-test-id="room-users"]').find('[data-test-id="self"]').text()).toEqual('Danielle, ');
        expect(wrapper.find('[data-test-id="room-users"]').find('[data-test-id="others"]').text()).toEqual('Ryan, Nick');

        wrapper.unmount();
    });
});