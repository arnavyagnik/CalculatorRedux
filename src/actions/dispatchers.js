'use strict';

import {
    INPUT,
    DECIMAL_INPUT,
    OPERATION_INPUT,
    CALCULATE,
    CLEAR,
    LONG_CLEAR
} from './types';

export function inputNumber(value) {
    return {
        type: INPUT,
        value
    };
}

export function inputDecimal() {
    return {
        type: DECIMAL_INPUT
    };
}

export function performOperation(operation) {
    return {
        type: OPERATION_INPUT,
        operation
    };
}
export function calculate() {
    return {
        type: CALCULATE
    };
}
export function clear() {
    return {
        type: CLEAR
    };
}
export function longClear() {
    return {
        type: LONG_CLEAR
    };
}
