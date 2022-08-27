import { LightningElement } from 'lwc';
import { loadStyle } from 'lightning/platformResourceLoader';
import helloWorldExternal from '@salesforce/resourceUrl/helloWorldExternal';
export default class HelloWorld extends LightningElement {
    greeting = 'World';
    changeHandler(event) {
        this.greeting = event.target.value;
    }
    connectedCallback() {
        Promise.all([
            loadStyle(this, helloWorldExternal),
        ]).then(() => console.log('Loaded'));
    }
}