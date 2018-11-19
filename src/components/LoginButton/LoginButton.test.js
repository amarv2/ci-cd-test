/* global it, expect, describe */
import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import LoginButton from '.';

const mockStore = configureMockStore();
const store = mockStore({});

describe('LoginButton', () => {
  it('snapshot for LoginButton', () => {
    const props = {
      buttonText: '',
    };
    const tree = shallow(
      <Provider store={store}>
        <LoginButton {...props} />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
