/* global it, expect, describe, jest */
import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import BlockUserModalView from '.';

const mockStore = configureMockStore();
const store = mockStore({});

describe('BlockUserModalView', () => {
  it('snapshot for BlockUserModalView', () => {
    const props = {
      blockUser: jest.fn(),
      getOrganizationDetails: jest.fn(),
      toggleConfirmationModal: jest.fn(),
      selectedUser: {
        id: 0,
        name: '',
        surname: '',
      },
      urlParams: '',
    };
    const tree = shallow(
      <Provider store={store}>
        <BlockUserModalView {...props} />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
