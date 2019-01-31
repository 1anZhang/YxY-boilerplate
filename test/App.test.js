import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/components/TestCom';

describe('App', () => {
  test('shoule match snapshot', () => {
    const warpper = shallow(<App />);
    expect(warpper.find('p').text()).toBe('test component');
    expect(warpper).toMatchSnapshot;
  });
});
