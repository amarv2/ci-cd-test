/* global it, describe */
import React from 'react';

import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import LandingPageView from '.';

const mockStore = configureMockStore();
const store = mockStore({});

describe('LandingPageView', () => {
  it('should render without throwing an error', () => {
    shallow(
      <Provider store={store}>
        <LandingPageView />
      </Provider>,
    );
  });
});
