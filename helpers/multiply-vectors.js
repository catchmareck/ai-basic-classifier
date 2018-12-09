function multiplyVectors(inputs, weights) {

    if (inputs.length !== weights.length) {

        throw new Error('Inputs and Weights vectors have to be of equal length');
    }

    var result = 0;
    for (var i = 0; i < inputs.length; i++) {

        result += inputs[i] * weights[i];
    }

    return result;
}

module.exports = multiplyVectors;
