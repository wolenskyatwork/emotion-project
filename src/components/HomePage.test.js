import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './HomePage';

it('renders welcome message', () => {
  const wrapper = shallow(<HomePage />);
  // note the welcome component has to match exactly (className and all) to be true)
  const welcome = <h1 className='lead'>Hey there! How are you feeling today?</h1>;

  expect(wrapper.length).toEqual(1);
  expect(wrapper.contains(welcome)).toEqual(true);
});