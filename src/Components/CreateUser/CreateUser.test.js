import React from 'react';
import CreateUser from './CreateUser';
import { shallow } from 'enzyme';

describe('CreateUser', () => {
  let wrapper
  it('should match the snapshot', () => {
    wrapper = shallow(<CreateUser />)
    expect(wrapper).toMatchSnapshot()
  })
}) 