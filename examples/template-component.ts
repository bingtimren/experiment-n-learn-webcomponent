export class TemplateComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:"open"}); // allow external JS
        
        // clone template and attach
        const templateId = this.getAttribute("template-id");
        if (templateId===null){
            return;
        }
        const templateElem = document.getElementById(templateId) as HTMLTemplateElement|null;
        if (templateElem === null) 
            return;
        this.shadowRoot!.appendChild(templateElem.content.cloneNode(true));

    }
}

