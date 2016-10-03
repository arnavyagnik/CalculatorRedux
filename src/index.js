'use strict';

import {Navigator} from 'react-native';
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './store';
import Calculator from './Calculator';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Calculator />
      </Provider>
    );
  }
}
