const Test = require('./test');

function generateTestSet(testCount) {

    var testSet = [];
    console.time('generateTestSet');
    for (var i = 0; i < testCount; i++) {

        var rand1 = Math.random() * (1000) - 500;
        var rand2 = Math.random() * (1000) - 500;
        testSet.push(new Test([rand1, rand2]));
    }
    console.timeEnd('generateTestSet');

    return testSet;
}

module.exports = generateTestSet;
