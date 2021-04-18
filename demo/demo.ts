import { rootState, rootStore, lvlMonitorState } from './stores';
import { observeLitElement } from '../src'
import { html, customElement, LitElement } from 'lit-element';


@customElement("demo-comp")
class DemoComponent extends observeLitElement(LitElement) {
    render() {
        return html`
            <div>
                <button @click=${() => rootStore.toggle()}>toggle</button>
                ${
                    rootState.isHidden 
                    ? "" 
                    : html`<button @click=${() => rootStore.increment()}>LVL UP</button>`
                }
            </div>           
        `;
    }
}
@customElement("user-component")
class MyComponent extends observeLitElement(LitElement)  {
    render() {
        return html`
            <div>
                <h2>${rootState.userName}</h2>
                <h3>${lvlMonitorState.lvlStatus}</h3>
            </div>
        `;
    }
}