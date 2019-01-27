'use strict';

const Test = require('./test');

module.exports = (testCount) => {

    const testSet = [];
    console.time('generateTestSet');
    for (let i = 0; i < testCount; i++) {

        const rand1 = Math.random() * (1000) - 500;
        const rand2 = Math.random() * (1000) - 500;
        testSet.push(new Test([rand1, rand2]));
    }
    console.timeEnd('generateTestSet');

    return testSet;
};
