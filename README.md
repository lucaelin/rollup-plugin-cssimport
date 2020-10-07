# rollup-plugin-cssimport
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