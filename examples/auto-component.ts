export class AutoComponent extends HTMLElement {

    private customAttrSpanText: Text;
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

        // Create (nested) span elements
        const wrapper = document.createElement('span');
        const text = document.createTextNode(`an autonomous custom element,`);
        wrapper.appendChild(text);

        // create custom attribute span element
        const attr = document.createElement("span");
        this.customAttrSpanText = attr.appendChild(document.createTextNode(""));
        attr.setAttribute("class", "auto-component red");
        wrapper.appendChild(document.createTextNode(" "));
        wrapper.appendChild(attr);

        // attach element to shadow root
        this.shadowRoot!.append(wrapper);
        console.log("AutoComponent: constructor - done")

    };

    updateCustomAttributeSpan() {
        // get custom attribute
        const customAttr = this.getAttribute("custom-attr");
        this.customAttrSpanText.textContent = customAttr === null ? "" : customAttr;
    };

    connectedCallback() {
        console.log("AutoComponent: connectedCallback")
        this.updateCustomAttributeSpan();
    };

    disconnectedCallback() {
        console.log('AutoComponent: disconnectedCallback');
    };

    adoptedCallback() {
        console.log("AutoComponent: adoptedCallback");
    };

    // observe custom-attr and update text
    static get observedAttributes() {
        return ['custom-attr'];
    };
    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        console.log(`AutoComponent: attribute changed name=${name}, "${oldValue}"=>"${newValue}"`);
        this.updateCustomAttributeSpan();
    };

}

