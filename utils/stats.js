'use strict';

const compareVectors = require('../helpers/compare-vectors');

class Stats {
    
    constructor(totalSamples) {

        this.total = totalSamples;

        this.errCount = 0;

        this.xTN = 0; // was 0 and got 0
        this.xTP = 0; // was 1 and got 1
        this.xFN = 0; // was 1 and got 0
        this.xFP = 0; // was 0 and got 1

        this.yTN = 0; // was 0 and got 0
        this.yTP = 0; // was 1 and got 1
        this.yFN = 0; // was 1 and got 0
        this.yFP = 0; // was 0 and got 1

        this.lastFailedSample = {
            inputs: [],
            desOutput: [],
            actOutput: [],
            whoFailed: ''
        };
    }

    isOk(testSample, desOutput, actOutput) {

        const isOk = compareVectors(desOutput, actOutput);

        if (!isOk) {

            this.errCount++;
            this.lastFailedSample.inputs = testSample.inputs;
            this.lastFailedSample.desOutput = desOutput;
            this.lastFailedSample.actOutput = actOutput;
            this.lastFailedSample.whoFailed = (desOutput[0] !== actOutput[0] && desOutput[1] !== actOutput[1]) ? 'XY' : (desOutput[1] !== actOutput[1]) ? 'Y' : (desOutput[0] !== actOutput[0]) ? 'X' : 'none';
        }

        this.xTN = (desOutput[0] === 0 && actOutput[0] === 0) ? this.xTN + 1 : this.xTN;
        this.xTP = (desOutput[0] === 1 && actOutput[0] === 1) ? this.xTP + 1 : this.xTP;
        this.xFN = (desOutput[0] === 1 && actOutput[0] === 0) ? this.xFN + 1 : this.xFN;
        this.xFP = (desOutput[0] === 0 && actOutput[0] === 1) ? this.xFP + 1 : this.xFP;

        this.yTN = (desOutput[1] === 0 && actOutput[1] === 0) ? this.yTN + 1 : this.yTN;
        this.yTP = (desOutput[1] === 1 && actOutput[1] === 1) ? this.yTP + 1 : this.yTP;
        this.yFN = (desOutput[1] === 1 && actOutput[1] === 0) ? this.yFN + 1 : this.yFN;
        this.yFP = (desOutput[1] === 0 && actOutput[1] === 1) ? this.yFP + 1 : this.yFP;

        return isOk;
    }
    
    logSummary() {

        console.log('Stats');
        console.log('Total:', this.total, 'Ok:', this.total - this.errCount, 'Error:', this.errCount);
        console.log('--------------------');
        console.log('X-stats:');
        console.log({ TN: this.xTN, TP: this.xTP, FN: this.xFN, FP: this.xFP });
        console.log('Y-stats:');
        console.log({ TN: this.yTN, TP: this.yTP, FN: this.yFN, FP: this.yFP });
    }
}

module.exports = Stats;
