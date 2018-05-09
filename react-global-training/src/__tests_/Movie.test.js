import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Movie from './../Movie';
import { shallow, mount } from 'enzyme';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('./../getMovie');


it('Movie test', () => {
    const component = mount(
    <Router>
        <Movie />
    </Router>
    );
    console.log(component.debug());
});