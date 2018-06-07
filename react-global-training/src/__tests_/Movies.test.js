import React from 'react';
// import renderer from 'react-test-renderer';
import Movies from './../Movies';
import { shallow, mount } from 'enzyme';
import { store } from './../store';
import { Provider } from 'react-redux';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router } from 'react-router-dom';

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
