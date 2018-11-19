/* global it, expect, describe, jest */
import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import OrganizationTableView from '.';

const mockStore = configureMockStore();
const store = mockStore({});

describe('OrganizationTableView', () => {
  it('snapshot for OrganizationTableView', () => {
    const props = {
      organizationOverview : {
        organization: [],
        status: '',
      },
      getAllOrganizations: jest.fn(),
    };
    const tree = shallow(
      <Provider store={store}>
        <OrganizationTableView {...props} />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
