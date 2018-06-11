import React from 'react';
import { Enzyme, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MoviesList from './../MoviesList';
import App from './../App';
import getMovies from './../__mocks__/getMovies';


Enzyme.configure({ adapter: new Adapter() });

it('MovieList', async () => {
  const x = await getMovies('', '', '');
  const component = shallow(<MoviesList movies={x.data} />);
  expect(component).toMatchSnapshot();
});
