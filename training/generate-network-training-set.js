const Sample = require('./sample');

function generateNetworkTrainingSet() {

    console.time('generateNetworkTrainingSet');
    const trainingSet = [
        new Sample([1, 1], [1, 1]),     // I quarter
        new Sample([-1, 1], [0, 1]),    // II quarter
        new Sample([-1, -1], [0, 0]),   // III quarter
        new Sample([1, -1], [1, 0])     // IV quarter
    ];
    console.timeEnd('generateNetworkTrainingSet');

    return trainingSet;
}

module.exports = generateNetworkTrainingSet;
