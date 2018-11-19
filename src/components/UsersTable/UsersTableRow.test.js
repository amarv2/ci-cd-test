/* global it, expect, describe, jest */
import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import UsersTableRow from './UsersTableRow';

const mockStore = configureMockStore();
const store = mockStore({});

describe('UserTableRow', () => {
  it('snapshot for UserTableRow', () => {
    const props = {
      data: {
        id: 0,
        name: '',
        surname: '',
        email: '',
        githubHandle: '',
        users: [],
      },
      urlParams: '',
      toggleEditMode: jest.fn(),
      getUserById: jest.fn(),
      toggleConfirmationModal: jest.fn(),
    };
    const tree = shallow(
      <Provider store={store}>
        <UsersTableRow {...props} />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
