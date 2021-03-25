import { createStore, observeLitElement } from './src'
import { html, customElement, LitElement } from 'lit-element';
class myStore {
    data = {
        lvl: 1,
        isHidden: false,
        userName: "Captain America"
    }
    increment(){
        this.data.lvl++;
    }
    toggle(){
        this.data.isHidden = !this.data.isHidden;
    }
}
const store = new (createStore(myStore)); 
const state = store.data;

@customElement("demo-comp")
class DemoComponent extends observeLitElement(LitElement) {
    render() {
        return html`
            <div>
                ${
                    state.isHidden 
                    ? "" 
                    : html`<div>Current level: ${state.lvl}</div>`
                }
            </div>           
            <button @click=${() => store.increment()}>LVL UP</button>
            <button @click=${() => store.toggle()}>toggle</button>
        `;
    }
}
@customElement("user-component")
class MyComponent extends createLitStore(LitElement)  {
    render() {
        return html`
            <div>
                <h2>${state.userName}</h2>
                <h3>LVL: ${state.lvl}</h3>
            </div>
        `;
    }
}