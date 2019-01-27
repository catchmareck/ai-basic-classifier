# ai-basic-classifier
This is a very basic neural network consisting of two perceptrons designed to assign points to quarters on the coordinate system. Unfortunately, it's not ideal and it fails sometimes so I have to figure out how to fix it.

### 1. How to train and test a single Perceptron?
```sbtshell
$ node perceptron-demo.js
```

### 2. How to train and test the Neural Network?
```sbtshell
$ node network-demo.js
```

### 3. How to use the Neural Network?
Using my Network means that you want to give your own coordinates and get the quarter which the point belongs to. Follow these two steps below and have fun.

##### 3.1 Comment out this block of code from the `network-demo.js` file:
```javascript
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
```

##### 3.2 Give your own samples to test the Network manually by using `Network.getQuarter(coords)` method:
```javascript
network.getQuarter([1, 2]); // => Quarter I
network.getQuarter([1.093, -223.7492]); // => Quarter IV
network.getQuarter([-0.093, 23]); // => Quarter II
network.getQuarter([-95, -23.97]); // => Quarter III
```
