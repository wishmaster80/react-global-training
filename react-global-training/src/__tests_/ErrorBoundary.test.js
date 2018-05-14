import React, { Component } from 'react';
import App from './../App';
import { shallow, mount } from 'enzyme';
import ErrorBoundary from './../ErrorBoundary'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('ErrorBoundary.test', () => {
    const component = shallow(<ErrorBoundary />);
    expect(component).toMatchSnapshot();
}
)

// it('ErrorBoundary.test', () => {
        
//     const component = mount(
//     <ErrorBoundary>
//         <Exception />
//     </ErrorBoundary>);
//     expect(component).toMatchSnapshot();
// }
// )

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