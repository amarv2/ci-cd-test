/* global it, expect, describe, jest */
import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import CreateOrganizationForm from '.';

const mockStore = configureMockStore();
const store = mockStore({});

describe('CreateOrganizationForm', () => {
  it('snapshot for CreateOrganizationForm', () => {
    const props = {
      handleSubmit: jest.fn(),
    };
    const tree = shallow(
      <Provider store={store}>
        <CreateOrganizationForm {...props} />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
