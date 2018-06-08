import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Enzyme, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Movies from './../Movies';
import { store } from './../store';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('./../getMovies');


it('Movies', () => {
  const component = shallow(<Provider store={store}>
            <Router>
                <Movies />
            </Router>
        </Provider>);
    // component.find('button').simulate('click');
});
