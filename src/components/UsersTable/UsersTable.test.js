/* global it, expect, describe */
import React from 'react';
import { shallow } from 'enzyme';

import UsersTable from './UsersTable';

describe('UserTable', () => {
  it('snapshot for userTable', () => {
    const props = {
      data: {
        users: [],
      },
      urlParams: '',
    };
    const tree = shallow(<UsersTable {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
