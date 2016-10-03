'use strict';

import { StyleSheet, View, Text} from 'react-native';
import React, {Component} from 'react';
import {OPERATION_ADD, OPERATION_SUBTRACT, OPERATION_DIVIDE, OPERATION_MULTIPLY} from '../actions/types';
import styles from '../assets/css/output';
import {aggregatecalculationsHistory} from '../helper';

var OperationSymbols = OperationSymbols = {
  [OPERATION_ADD]: '+',
  [OPERATION_SUBTRACT]: '-',
  [OPERATION_DIVIDE]: '/',
  [OPERATION_MULTIPLY]: 'X'
};

class OutputScreen extends Component {
  getOutput() {
    var {currentInput, history} = this.props.calculations;
    if (currentInput.length === 0 && history.length === 0) {
      return 0
    } else if (currentInput.length === 0) {
      return '';
    } else {
      return currentInput.join('');
    }
  }
  renderAggregate() {
    var {currentInput, history, operation, offset} = this.props.calculations;
    if (history.length > 0) {
      let aggregate = aggregatecalculationsHistory(history, offset);
      return (
        <Text style={styles.aggregate}>{aggregate} {OperationSymbols[operation]}</Text>
      );
    }
  }
  render() {
    var {offset, history, operation} = this.props.calculations;
    return (
      <View style={[styles.view, this.props.style]}>
        {this.renderAggregate()}
        <Text style={styles.text}>{this.getOutput()}</Text>
      </View>
    )
  }
}


export default OutputScreen;
