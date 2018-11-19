/* global it, expect, describe, jest */
import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import LoginForm from '.';

const mockStore = configureMockStore();
const store = mockStore({});

describe('LoginForm', () => {
  it('snapshot for LoginForm', () => {
    const props = {
      handleSubmit: jest.fn(),
    };
    const tree = shallow(
      <Provider store={store}>
        <LoginForm {...props} />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
