'use strict';

import {
    INPUT,
    DECIMAL_INPUT,
    OPERATION_INPUT,
    CALCULATE,
    CLEAR,
    LONG_CLEAR
} from '../actions/types';
import {
    aggregateCalculatorHistory
} from '../helper';

const initialState = {
    offset: null,
    operation: '',
    currentInput: [],
    history: []
};

export default function calculationReducer(state = initialState, action) {
    var currentInput = state.currentInput.slice();
    var history = state.history.slice();
    var operation = state.operation;
    switch (action.type) {
        case INPUT:
            currentInput.push(action.value);
            return {
                ...state,
                currentInput
            };
        case DECIMAL_INPUT:
            if (state.currentInput.indexOf('.') > -1) {
                return state;
            }
            currentInput.push('.');
            return {
                ...state,
                currentInput
            };
        case OPERATION_INPUT:
            // assign the current operation
            if (history.length === 0 && currentInput.length > 0) {
                history.push({
                    input: parseFloat(currentInput.join('')),
                    operation: action.operation
                });
                currentInput = [];
                return {
                    ...state,
                    operation: action.operation,
                    currentInput,
                    history
                };
            }
            return {
                ...state,
                operation: action.operation
            };
        case CALCULATE:
            if (currentInput.length === 0) {
                return state;
            }
            history.push({
                input: parseFloat(currentInput.join('')),
                operation: state.operation
            })
            currentInput = [];
            operation = ''
            return {
                ...state,
                history,
                currentInput,
                operation
            };
        case CLEAR:
            currentInput.pop();
            operation = currentInput.length > 0 ? operation : ''
            return {
                ...state,
                currentInput,
                history,
                operation
            };
        case LONG_CLEAR:
            currentInput = [];
            history = [];
            operation = ''
            return {
                ...state,
                currentInput,
                history,
                operation
            };
        default:
            return state;
    }
}
