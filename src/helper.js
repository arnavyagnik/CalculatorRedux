'use strict';

import {OPERATION_ADD, OPERATION_SUBTRACT, OPERATION_DIVIDE, OPERATION_MULTIPLY} from './actions/types';

/**
 * Operations map
 */
const Operations = {
  [OPERATION_ADD]: (operand, current) => operand + current,
  [OPERATION_SUBTRACT]: (operand, current) => operand - current,
  [OPERATION_MULTIPLY]: (operand, current) => operand * current,
  [OPERATION_DIVIDE]: (operand, current) => operand / current
};

/**
 * Aggregates the final value of the calculations by the history of inputs
 */
export function aggregatecalculationsHistory (calculations, offset = null, stepFunction = function(){}) {
  let collection = calculations.slice(0, offset === null ? calculations.length : (offset + 2));
  if (collection.length === 0) {
    return 0;
  } else if (collection.length === 1) {
    return collection[0].input;
  }
  return collection.slice(1, calculations.length).reduce((aggregate, current, index) => {
    stepFunction(aggregate, current.input, current.operation, index);
    if (Operations[current.operation]) {
      return Operations[current.operation](aggregate, current.input);
    }
    return aggregate;
    }
   ,collection[0].input);
}
