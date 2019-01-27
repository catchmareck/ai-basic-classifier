'use strict';

const Sample = require('./sample');

module.exports = () => {

    console.time('generateTrainingSet');
    const trainingSet = [
        new Sample([1, 1], 1),     // above X
        new Sample([-1, 1], 1),    // above X
        new Sample([-1, -1], 0),   // below X
        new Sample([1, -1], 0)     // below X
    ];
    console.timeEnd('generateTrainingSet');

    return trainingSet;
};
