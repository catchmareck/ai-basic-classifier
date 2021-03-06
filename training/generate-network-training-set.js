'use strict';

const Sample = require('./sample');

module.exports = () => {

    console.time('generateNetworkTrainingSet');
    const trainingSet = [
        new Sample([1, 1], [1, 1]),     // I quarter
        new Sample([-1, 1], [0, 1]),    // II quarter
        new Sample([-1, -1], [0, 0]),   // III quarter
        new Sample([1, -1], [1, 0])     // IV quarter
    ];
    console.timeEnd('generateNetworkTrainingSet');

    return trainingSet;
};
