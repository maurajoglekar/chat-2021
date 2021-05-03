import React from 'react';
import { shallow } from 'enzyme';

import { NavHeading } from './NavHeading';

describe('NavHeading component', () => {
    const minprops = {
        startTime: new Date(),
        userName: 'Ryan'
    };

    it('renders correctly', () => {
        const wrapper = shallow(<NavHeading {...minprops} />);

        // console.log(wrapper.find('[data-test-id="user-name"]').debug());
        expect(wrapper.find('[data-test-id="user-name"]').text()).toEqual('Ryan');
        expect(wrapper.find('[data-test-id="elapsed-time"]').text()).toEqual('Online for 0 minutes');

        wrapper.unmount();
    });
});