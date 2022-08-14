const { createFilter } = require('@rollup/pluginutils');

const generateJS = (code) => `
const sheet = new CSSStyleSheet();
sheet.replaceSync(${JSON.stringify(code)});
export default sheet;
`;

function css(options = {}) {
    options = {
        include: '**/*.css',
        exclude: [],
        ...options,
    };
    const filter = createFilter(options.include, options.exclude, options.options);

    return {
        name: 'css',

        transform(code, id) {
            if (filter(id)) {
                return {
                    code: generateJS(code),
                    map: { mappings: '' }
                };
            }
        }
    };
}

module.exports = css;
