import React from 'react';
import { mount, shallow } from 'enzyme';
import HelloWorld from '../src/HelloWorld';

import should from 'should';

describe('<HelloWorld />', () => {

    it('renders a header with the sentance Hello World!', () => {

        const wrapper = mount(<HelloWorld />);

        wrapper.find('h1').text().should.equal('Hello World!');

    });

});