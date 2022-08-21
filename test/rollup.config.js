const cssimport = require('../index.js');

module.exports = [{
    input: "./test/index.js",
    output: { format: "esm", file: "./test-out/index.js" },
    plugins: [cssimport()]
}, {
    input: "./test/index-filtered.js",
    output: { format: "esm", file: "./test-out/index-filtered.js" },
    plugins: [cssimport({include: '**/*.scss'})]
}];
