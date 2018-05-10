import React from 'react';
//import renderer from 'react-test-renderer';
import Movies from './../Movies';
import { shallow, mount } from 'enzyme';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router } from 'react-router-dom';
Enzyme.configure({ adapter: new Adapter() });

jest.mock('./../getMovies');


it('Movies', () => {
    const component = mount(
        <Router>
            <Movies />
        </Router>);
    component.find('button').simulate('click');

});