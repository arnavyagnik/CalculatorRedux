'use strict';

import React, {Component} from 'react';
import {StyleSheet, View, Text,Dimension} from 'react-native';
import {OPERATION_ADD, OPERATION_SUBTRACT, OPERATION_DIVIDE, OPERATION_MULTIPLY,CALCULATE,CLEAR} from '../actions/types';
import Button from './Button'
import styles from '../assets/css/inputStyles'
var Types = {
  NUMBER: 'NUMBER',
  DECIMAL: 'DECIMAL',
  SIGN: 'SIGN'
};

var inputs = [
  {value: 7, type: Types.NUMBER},
  {value: 4, type: Types.NUMBER},
  {value: 1, type: Types.NUMBER},
  {value: '.', type: Types.DECIMAL},
  {value: 8, type: Types.NUMBER},
  {value: 5, type: Types.NUMBER},
  {value: 2, type: Types.NUMBER},
  {value: 0, type: Types.NUMBER},
  {value: 9, type: Types.NUMBER},
  {value: 6, type: Types.NUMBER},
  {value: 3, type: Types.NUMBER},
  {value: '=', type: CALCULATE},
];
var operations = [
  {value: 'Del', operation: CLEAR},
  {value: '/', operation: OPERATION_DIVIDE},
  {value: 'x', operation: OPERATION_MULTIPLY},
  {value: '-', operation: OPERATION_SUBTRACT},
  {value: '+', operation: OPERATION_ADD}
];

class Inputs extends Component {
  render() {
    return (
      <View style={[this.props.style,styles.container]}>
        {this.renderInputColumn()}
        {this.renderOperationColumn()}
      </View>
    )
  }
  renderInputColumn() {
    var {inputNumber, inputSigned, inputDecimal,calculate} = this.props;
    return inputs.reduce((collection, input) => {
      if (collection[collection.length - 1].length === 4) {
        collection.push([]);
      }
      collection[collection.length-1].push(input);
      return collection;
    }, [[]]).map((group, rowIndex) => {
      var columns = group.map((item, columnIndex) => {
        return (
          <Button
            key={'inputRow_' + rowIndex + '_inputCol_' + columnIndex}
            style={styles.input}
            onPress={() => {
              if (item.type === Types.NUMBER) {
                inputNumber(item.value);
              } else if (item.type === Types.DECIMAL) {
                inputDecimal();
              } else if (item.type === CALCULATE) {
                calculate();
              }
            }}>
            <Text style={styles.text}>{item.value}</Text>
          </Button>
        );
      });
      return (
        <View style={[styles.row, styles.inputRow]} key={'inputRow_' + rowIndex}>
          {columns}
        </View>
      );
    });
  }
  renderOperationColumn() {
    var {performOperation , calculate , clear,longClear} = this.props;
    var columns = operations.map((operation, index) => {
      return (
        <Button
          key={'operationRow' + index}
          style={styles.inputActions}
          onPress={() => {
            if (operation.operation === CLEAR) {
              clear();
            } else{
              performOperation(operation.operation)
            }
          }}
          onLongPress={() => {
            if (operation.operation === CLEAR) {
              longClear();
            }
          }}>
          <Text style={styles.textActions}>{operation.value}</Text>
        </Button>
      );
    });
    return (
      <View style={[styles.rowActions, styles.operationRow]}>
        {columns}
      </View>
    );
  }
}


export default Inputs;
