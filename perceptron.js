const Stats = require('./utils/stats');

class Perceptron {
	
	constructor(weights, activationFun) {

        this.weights = weights;
        this.fun = activationFun;

        this.bias = 0;
        this.r = 0.1;
	}
	
	train(trainingSet) {

        console.time('Training');
        for (let i = 0; i < trainingSet.length; i++) {

            const inputs = trainingSet[i].inputs;
            const desOutput = trainingSet[i].output;

            const actOutput = this.fun(inputs, this.weights, this.bias);

            for (let j = 0; j < this.weights.length; j++) {

                this.weights[j] = this.weights[j] + this.r * (desOutput - actOutput) * inputs[j];
            }
        }
        console.timeEnd('Training');
	}

	test(testSet) {

        const stats = new Stats(testSet.length);

        console.time('Testing');
        for (let i = 0; i < testSet.length; i++) {

            const testOutput = this.fun(testSet[i].inputs, this.weights, this.bias);

            const isok = stats.isOk(testSet[i], [Number(testSet[i].inputs[1] > 0)], [testOutput]);

            if (!isok) {

                console.log(stats.lastFailedSample);
            }
        }
        console.timeEnd('Testing');

        stats.logSummary();
	}
}

module.exports = Perceptron;
