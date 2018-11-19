/* global it, expect, describe, jest */
import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import SideMenu from '.';

const mockStore = configureMockStore();
const store = mockStore({});

describe('SideMenu', () => {
  it('snapshot for SideMenu', () => {
    const props = {
      loggedIn: false,
      handleMenuToggle: jest.fn(),
      logoutUser: jest.fn(),
    };
    const tree = shallow(
      <Provider store={store}>
        <SideMenu {...props} />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
