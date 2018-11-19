/* global it, describe */

import React from 'react';

import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import OrganizationPageView from '.';

const mockStore = configureMockStore();
const store = mockStore({});

describe('Login page view', () => {
  it('should render without throwing an error', () => {
    shallow(
      <Provider store={store}>
        <OrganizationPageView />
      </Provider>,
    );
  });
});
