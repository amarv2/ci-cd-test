/* global it, expect, describe */
import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import OrganizationDetails from '.';

const mockStore = configureMockStore();
const store = mockStore({});

describe('OrganizationDetails', () => {
  it('snapshot for OrganizationDetails', () => {
    const props = {
      data : {
        id: 0,
        organizationName: '',
        email: '',
        type: '',
        users: [],
      },
      urlParams: '',
    };
    const tree = shallow(
      <Provider store={store}>
        <OrganizationDetails {...props} />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
