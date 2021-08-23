export class ExpandingList extends HTMLUListElement {

    private hide:boolean;

    constructor() {
        // Always call super first in constructor
        super();

        // iterates the children and turns off display
        this.styleLiChildren("display:none;");
        this.hide = true;

        // expand / collapse button
        const button = document.createElement("button");
        button.setAttribute("style","display:block;");
        button.appendChild(document.createTextNode("Show/Hide Items"));
        // without binding, DOM event handler binds "this" to 
        // the element on which the handler is attached
        button.onclick = this.toggleChildren.bind(this);
        this.appendChild(button);
    }

    private toggleChildren() {
        this.hide = !this.hide;
        this.styleLiChildren(this.hide?"display:none":null)
    }

    private styleLiChildren(style:string|null) {
        this.querySelectorAll("li").forEach(element=>{
            const liElement : HTMLLIElement = element;
            if (style)
                liElement.setAttribute("style",style);
            else
                liElement.removeAttribute("style");
        });
    }
}