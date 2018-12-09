const Sample = require('./sample');

function generateNetworkTrainigSet(sampleCount) {

    console.time('generateNetworkTrainingSet');
    var trainingSet = [];
    for (var i = 0; i < sampleCount; i++) {

        var rand1 = Math.random() * (200) - 100;
        var rand2 = Math.random() * (200) - 100;
        var output = [rand1 > 0 ? 1 : 0, rand2 > 0 ? 1 : 0];
        trainingSet.push(new Sample([rand1, rand2], output));
    }
    console.timeEnd('generateNetworkTrainingSet');

    return trainingSet;
}

module.exports = generateNetworkTrainigSet;
