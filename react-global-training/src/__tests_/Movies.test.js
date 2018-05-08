import React from 'react';
//import renderer from 'react-test-renderer';
import App from './../App';
import { shallow, mount } from 'enzyme';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('./../getMovies');


it('fetch data', () => {
    const component = mount(<App />);
    component.update();
    component.find('button').simulate('click');
    component.update();
    console.log(component.debug());

    const textValue = component
        .find('h1')
        .text();
        console.log(textValue);

    expect(textValue).toEqual('some mocked data');
});