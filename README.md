# rollup-plugin-cssimport

Please consider migrating to [rollup-plugin-import-assert](https://github.com/calebdwilliams/rollup-plugin-import-assert), as it better aligns with modern web standards.

Very simple rollup plugin to transform .css-files into CSSStyleSheet objects.

This works natively in chrome. Firefox and other browsers require a Polyfill (like https://github.com/calebdwilliams/construct-style-sheets) 

## Examples
### Global styles
```js
import MyDocumentStyle from './myDocumentStyle.css';

document.adoptedStyleSheets = [MyDocumentStyle];
```

### Element styles
```js
import MyElementStyle from './myElementStyle.css';

class MyElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.adoptedStyleSheets = [MyElementStyle];
    }
}
```
