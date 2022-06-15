function geraRandom(min, max) {
    return Math.random() * (max - min) + min;
};

module.exports = geraRandom;