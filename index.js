const { createFilter } = require('rollup-pluginutils');

const generateJS = (code) => `
const sheet = new CSSStyleSheet();
sheet.replaceSync(${JSON.stringify(code)});
export default sheet;
`;

function css() {
    const filter = createFilter('**/*.css', []);

    return {
        name: 'css',

        transform(code, id) {
            if (filter(id) || id.endsWith('.css')) {
                return {
                    code: generateJS(code),
                    map: { mappings: '' }
                };
            }
        }
    };
}

module.exports = css;
