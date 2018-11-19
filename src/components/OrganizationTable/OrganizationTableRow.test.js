/* global it, expect, describe */
import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import OrganizationTableRow from '.';

const mockStore = configureMockStore();
const store = mockStore({});

describe('OrganizationTableRow', () => {
  it('snapshot for OrganizationTableRow', () => {
    const props = {
      data : {
        id: 0,
        organizationName: '',
        email: '',
        users: [],
      },
    };
    const tree = shallow(
      <Provider store={store}>
        <OrganizationTableRow {...props} />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
