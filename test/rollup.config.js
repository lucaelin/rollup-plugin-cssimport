const cssimport = require('../index.js');

module.exports = {
    input: "./test/index.js",
    output: { format: "esm", file: "./test-out/index.js" },
    plugins: [cssimport()]
};