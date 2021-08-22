export class AutoComponent extends HTMLElement{
    constructor() {
        // Always call super first in constructor
        super();

        // Create a shadow root
        this.attachShadow({ mode: 'open' }); // sets and returns 'this.shadowRoot'

        // Create (nested) span elements
        const wrapper = document.createElement('span');
        const text = document.createTextNode('an autonomous custom element');
        wrapper.appendChild(text);

        // attach element to shadow root
        this.shadowRoot!.append(wrapper);

    }
}

