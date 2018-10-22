import React from 'react';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';

const mockStore = configureMockStore();
const store = mockStore({});

import { LoginPageView } from './LoginPageView';


  describe('LoginPageView', () => {
    describe('render()', () => {
      test('renders the component', () => {
        shallow(
          <Provider store={store}>
            <LoginPageView />
          </Provider>
        )
        });
    });
  });