/* global it, expect, describe, jest */
import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import CreateUserForm from '.';

const mockStore = configureMockStore();
const store = mockStore({});

describe('CreateUserForm', () => {
  it('snapshot for CreateUserForm', () => {
    const props = {
      handleSubmit: jest.fn(),
    };
    const tree = shallow(
      <Provider store={store}>
        <CreateUserForm {...props} />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
