'use strict';

module.exports = (vector1, vector2) => {

    if (vector1.length !== vector2.length) {

        return false;
    }

    for (let i = 0; i < vector1.length; i++) {

        if (vector1[i] !== vector2[i]) {

            return false;
        }
    }

    return true;
};
