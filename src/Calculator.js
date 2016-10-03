'use strict';

import {StyleSheet, View, Text} from 'react-native';
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as CalculatorActionCreators from './actions/dispatchers';
import OutputScreen from './components/outputScreen';
import Inputs from './components/inputs';
import Styles from './assets/css/Calculator';


class Calculator extends Component {
  constructor(props){
    super(props)
  }
  render() {
    var {dispatch, calculations} = this.props;
    var boundActionCreators = bindActionCreators(CalculatorActionCreators, dispatch);
    return (
      <View style={styles.container}>
        <OutputScreen
          style={styles.outputScreen}
          calculations={calculations} />
        <Inputs
          {...boundActionCreators}
          style={{flex: 1}} />
      </View>
    );
  }
}


export default connect(state => {
  return {calculations: state.calculations}} )(Calculator)
