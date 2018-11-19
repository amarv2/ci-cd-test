/* global it, expect, describe, jest */
import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import UsersConfirmationModal from '.';

const mockStore = configureMockStore();
const store = mockStore({});

describe('UsersConfirmationModal', () => {
  it('snapshot for UsersConfirmationModal', () => {
    const props = {
      confirmationModalOpen: Boolean,
      modalCategory: '',
      toggleConfirmationModal: jest.fn(),
    };
    const tree = shallow(
      <Provider store={store}>
        <UsersConfirmationModal {...props} />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
