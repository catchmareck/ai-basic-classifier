'use strict';

module.exports = (inputs, weights) => {

    if (inputs.length !== weights.length) {

        throw new Error('Inputs and Weights vectors have to be of equal length');
    }

    let result = 0;
    for (let i = 0; i < inputs.length; i++) {

        result += inputs[i] * weights[i];
    }

    return result;
};
