import App from '../src/components/TestCom';
import React from 'react';
import { shallow } from 'enzyme';

describe('App', () => {
  test('shoule match snapshot', () => {
    const warpper = shallow(<App />);
    expect(warpper.find('p').text()).toBe('test component');
    expect(warpper).toMatchSnapshot;
  })
})