const Perceptron = require('./perceptron');

const generateTestSet = require('./testing/generate-test-set');
const generateTrainingSet = require('./training/generate-training-set');
const multiplyVectors = require('./helpers/multiply-vectors');

// const weights = [ -0.0002462081589111875, 496.13167433804506 ]; // trained weights
const weights = [0,0];
const activationFun = (inputs, weights, bias) => multiplyVectors(inputs, weights) + bias > 0 ? 1 : 0;
const perceptron = new Perceptron(weights, activationFun);

const trainingSet = generateTrainingSet(1e6);
console.time('TrainingIterations');
for (let i = 0; i < 5e3; i++) {

    i % 1000 === 0 && console.log('Training iteration', i + 1);
    perceptron.train(trainingSet);
}
console.timeEnd('TrainingIterations');

console.log(weights);

const testSet = generateTestSet(1e7);
perceptron.test(testSet);
