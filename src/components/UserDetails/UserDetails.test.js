/* global it, expect, describe, jest */
import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import UserDetails from '.';

const mockStore = configureMockStore();
const store = mockStore({});

describe('UserDetails', () => {
  it('snapshot for UserDetails', () => {
    const props = {
      data : {
        name: '',
        surname: '',
        email: '',
        githubHandle: '',
      },
      isEditing: null,
      toggleEditMode: jest.fn(),
    };
    const tree = shallow(
      <Provider store={store}>
        <UserDetails {...props} />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
