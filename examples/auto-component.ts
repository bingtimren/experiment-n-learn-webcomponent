export class AutoComponent extends HTMLElement{
    constructor() {
        // Always call super first in constructor
        super();

        // Create a shadow root
        this.attachShadow({ mode: 'open' }); // sets and returns 'this.shadowRoot'


        // apply external styles to the shadow dom
        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', '/examples/auto-component.css');      
        this.shadowRoot!.append(linkElem);  

        // get custom attribute
        const customAttr = this.getAttribute("custom-attr");

        // Create (nested) span elements
        const wrapper = document.createElement('span');
        const text = document.createTextNode(`an autonomous custom element,`);
        wrapper.appendChild(text);

        if (customAttr !== null) {
            const attr = document.createElement("span");
            attr.appendChild(document.createTextNode(`custom-attr="${customAttr}"`));
            attr.setAttribute("class","auto-component red");
            wrapper.appendChild(document.createTextNode(" "));
            wrapper.appendChild(attr);            
        }

        // attach element to shadow root
        this.shadowRoot!.append(wrapper);

    }
}

