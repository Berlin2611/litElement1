import { LitElement, html } from 'lit-element';

export class MyCounter extends LitElement {

    static get properties(){
        return{
            counter: { type: Number }
        };
    }

    constructor(){
        super();
        this.counter = 0;

    }

    render() {
        return html`
        <div>Llevas ${this.counter} clicks!!!</div>
        <div>
            <button @click="${this.incrementar}">+1</button>
            <button @click="${this.decrementar}">-1</button>
        </div>

        <feedback-element id="feedback"></feedback-element>
        `;
    }
    incrementar(){
        this.counter ++;
        if(this.counter == 5){
            this.shadowRoot.getElementById('feedback').open('Has llegado a 5 clicks');
        }
    }
    decrementar(){
        this.counter --;
        if(this.counter == 0){
            this.shadowRoot.getElementById('feedback').open('Has reseteado los clicks');
        }
    }
}
customElements.define('my-counter', MyCounter);