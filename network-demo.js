const Network = require('./network');
const Perceptron = require('./perceptron');
const generateTestSet = require('./testing/generate-test-set');
const generateNetworkTrainingSet = require('./training/generate-network-training-set');
const multiplyVectors = require('./helpers/multiply-vectors');

const activationFun = (inputs, weights, bias) => multiplyVectors(inputs, weights) + bias > 0 ? 1 : 0;
// const weightsX = [ 749.3069003109637, 0.000029018565501637283 ], weightsY = [ -0.00029550342343753755, 551.0408346881147 ] // trained weights 7 failed of 5x1e6
// const weightsX = [ 370.36936286936844, -0.00022006840990318466 ], weightsY = [ -0.00007773180156034343, 231.78543653548152 ] // trained weights 10 failed of 5x1e6
const weightsX = [0,0];
const weightsY = [0,0];
const percX = new Perceptron(weightsX, activationFun);
const percY = new Perceptron(weightsY, activationFun);
const network = new Network([percX, percY]);

const networkTraining = generateNetworkTrainingSet(1e6);
console.time('NetworkTrainingIterations');
for (let i = 0; i < 3e2; i++) {

    i % 10 === 0 && console.log('NetworkTraining iteration', i);
    network.train(networkTraining);
}
console.timeEnd('NetworkTrainingIterations');

console.log(weightsX, weightsY);

const networkTestSet = generateTestSet(1e7);
network.test(networkTestSet);
