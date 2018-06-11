import React, { Component } from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, Enzyme } from 'enzyme';
import ErrorBoundary from './../ErrorBoundary';
import App from './../App';

Enzyme.configure({ adapter: new Adapter() });

it('ErrorBoundary.test', () => {
  const component = shallow(<ErrorBoundary />);
  expect(component).toMatchSnapshot();
});


class Exception extends Component {
  componentDidMount() {
    throw new Error('I crashed!');
  }
  render() {
    return (
            <div></div>
    );
  }
}
