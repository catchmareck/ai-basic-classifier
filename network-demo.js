'use strict';

const Network = require('./network');
const Perceptron = require('./perceptron');
const generateTestSet = require('./testing/generate-test-set');
const generateNetworkTrainingSet = require('./training/generate-network-training-set');
const multiplyVectors = require('./helpers/multiply-vectors');

const activationFun = (inputs, weights, bias) => multiplyVectors(inputs, weights) + bias > 0 ? 1 : 0;
const weightsX = [0,0];
const weightsY = [0,0];
const percX = new Perceptron(weightsX, activationFun);
const percY = new Perceptron(weightsY, activationFun);
const network = new Network([percX, percY]);

const networkTrainingSet = generateNetworkTrainingSet();
console.time('NetworkTrainingIterations');
for (let i = 0; i < 3e2; i++) {

    i % 10 === 0 && console.log('NetworkTraining iteration', i);
    network.train(networkTrainingSet);
}
console.timeEnd('NetworkTrainingIterations');

console.log(weightsX, weightsY);

const networkTestSet = generateTestSet(1e7);
network.test(networkTestSet);
