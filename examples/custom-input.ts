export class CustomInput extends HTMLInputElement {
    constructor() {
        super();
    }
    get value():string {
        return `{ ${super.value} }`;
    };
    

}