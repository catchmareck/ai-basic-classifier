'use strict';

const Stats = require('./utils/stats');

class Network {
    
    constructor(perceptrons) {
        
        this.perceptrons = perceptrons;
    }
    
    train(trainingSet) {

        console.time('TrainingNetwork');
        for (let i = 0; i < trainingSet.length; i++) {

            const inputs = trainingSet[i].inputs;
            const desOutput = trainingSet[i].output;
            const actOutput = this.perceptrons.map((perceptron) => perceptron.fun(inputs, perceptron.weights, perceptron.bias));

            this.perceptrons.forEach((perceptron, index) => {

                for (let j = 0; j < perceptron.weights.length; j++) {

                    perceptron.weights[j] = perceptron.weights[j] + perceptron.r * (desOutput[index] - actOutput[index]) * inputs[j];
                }
            });
        }
        console.timeEnd('TrainingNetwork');
    }
    
    test(testSet) {

        const stats = new Stats(testSet.length);

        console.time('TestingNetwork');
        for (let i = 0; i < testSet.length; i++) {

            const testOutput = this.perceptrons.map((perceptron) => perceptron.fun(testSet[i].inputs, perceptron.weights, perceptron.bias));
            const desOutput = [Number(testSet[i].inputs[0] > 0), Number(testSet[i].inputs[1] > 0)];

            const isok = stats.isOk(testSet[i], desOutput, testOutput);

            if (!isok) {

                console.log(stats.lastFailedSample);
            }
        }
        console.timeEnd('TestingNetwork');

        stats.logSummary();
    }
    
    getOutput(inputs) {

        return this.perceptrons.map((perceptron) => perceptron.fun(inputs, perceptron.weights, perceptron.bias));
    }
    
    getQuarter(coords) {

        const output = this.getOutput(coords);

        switch (true) {
            case output[0] === 1 && output[1] === 1:
                return 'Quarter I';
            case output[0] === 0 && output[1] === 1:
                return 'Quarter II';
            case output[0] === 0 && output[1] === 0:
                return 'Quarter III';
            case output[0] === 1 && output[1] === 0:
                return 'Quarter IV';
        }
    }
}

module.exports = Network;
