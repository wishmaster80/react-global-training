import React from 'react';
//import renderer from 'react-test-renderer';
import App from './../App';
import { shallow, mount } from 'enzyme';
import MoviesList from './../MoviesList'

import getMovies from './../__mocks__/getMovies'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

it('MovieList', async () => {
    var x = await getMovies('', '', '', )
    const component = shallow(<MoviesList movies={x.data} />);
    }
)