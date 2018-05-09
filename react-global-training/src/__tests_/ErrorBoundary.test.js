import React from 'react';
//import renderer from 'react-test-renderer';
import App from './../App';
import { shallow, mount } from 'enzyme';
import ErrorBoundary from './../ErrorBoundary'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('ErrorBoundary.test', () => {
    const component = shallow(<ErrorBoundary />);

}
)