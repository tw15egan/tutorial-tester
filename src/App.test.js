import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('Test 1', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  const wrapper = shallow(<App />);

  it('contains a Carbon button', () => {
    expect(wrapper.find('.bx--btn').length).toBe(1);
  });
});
