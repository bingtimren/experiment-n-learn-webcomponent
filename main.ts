import {AutoComponent} from "./examples/auto-component.js"
import {ExpandingList} from "./examples/customized-build-in.js"
customElements.define('auto-comp', AutoComponent);
customElements.define('expanding-list', ExpandingList, { extends: "ul" });

// set custom attr for example 1
const button = document.querySelector("button#c-attr-set") as HTMLButtonElement;
const customAttrInput = document.querySelector("input#c-attr") as HTMLInputElement;
const autoCompElement = document.querySelector("auto-comp.custom-element") as AutoComponent;
button.onclick = function(){
    autoCompElement.setAttribute("custom-attr", customAttrInput.value);
}
