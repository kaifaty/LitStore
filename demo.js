import { __decorate } from "tslib";
import { createStore, createLitStore } from './src';
import { html, customElement, LitElement } from 'lit-element';
class myStore {
    constructor() {
        this.data = {
            lvl: 1,
            isHidden: false,
            userName: "Captain America"
        };
    }
    increment() {
        this.data.lvl++;
    }
    toggle() {
        this.data.isHidden = !this.data.isHidden;
    }
}
const Store = createStore(myStore);
const store = new Store();
const state = store.data;
let DemoComponent = class DemoComponent extends createLitStore(LitElement) {
    render() {
        return html `
            <div>
                ${state.isHidden
            ? ""
            : html `<div>Current level: ${state.lvl}</div>`}
            </div>           
            <button @click=${() => store.increment()}>LVL UP</button>
            <button @click=${() => store.toggle()}>toggle</button>
        `;
    }
};
DemoComponent = __decorate([
    customElement("demo-comp")
], DemoComponent);
let MyComponent = class MyComponent extends createLitStore(LitElement) {
    render() {
        return html `
            <div>
                <h2>${state.userName}</h2>
                <h3>LVL: ${state.lvl}</h3>
            </div>
        `;
    }
};
MyComponent = __decorate([
    customElement("user-component")
], MyComponent);
