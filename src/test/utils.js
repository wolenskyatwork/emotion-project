import React from 'react';
import { mount, render, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../reducers/index';

const store = createStore(rootReducer);

export function mountInsideProvider(component) {
  return mount(
    <Provider store={ store }>
      { component }
    </Provider>
  );
}

export function renderInsideProvider(component) {
  return render(
    <Provider store={ store }>
      { component }
    </Provider>
  );
}

export function shallowInsideProvider(component) {
  return shallow(
    <Provider store={ store }>
      { component }
    </Provider>
  );
}
