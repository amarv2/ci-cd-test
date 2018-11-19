/* global it, expect, describe, jest */
import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import EditUser from '.';

const mockStore = configureMockStore();
const store = mockStore({});

describe('EditUserForm', () => {
  it('snapshot for EditUserFrom', () => {
    const props = {
      data: {
        id: 0,
        name: '',
        surname: '',
        githubHandle: '',
        email: '',
      },
      handleSubmit: jest.fn(),
      reset: jest.fn(),
    };
    const tree = shallow(
      <Provider store={store}>
        <EditUser {...props} />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
