# LitStore

Idea based on https://github.com/gitaarik/lit-state realisation.
Instead version of gitaarik this realisation more optimised and written on typescript.

### Simple shared app state management for Lit components.

LitStore automatically re-renders your Lit components, when a shared app
state variable they use changes.

## Installation

```
npm install lit-store
```

## Basic idea

You keep your shared state in a `LitStore` derived class. This class contains
`data` object with observable variables that contain the state. This class can 
also contain helper functions that modify the state. Decorate your `LitElement` 
classes with the `observeLitElement()` mixin. This makes your components automatically 
re-render whenever a vatiables in `data` they use changes.

You can subscribe/unsibscribe to store variable from another store uses `on/off` methods.


## Usage

### 1. Create a `LitStore` object:

```javascript
import { BaseStore } from '../src/store';


class RootStore extends BaseStore{
    data = {
        lvl: 1,
        isHidden: false,
        userName: "Captain America"
    }
    constructor(){
        super();
        this.initState();
    }
    increment(){
        this.data.lvl++;
    }
    toggle(){
        this.data.isHidden = !this.data.isHidden;
    }
};

class LVLMonitor extends BaseStore {
    data = {
        lvlStatus: ""
    }
    constructor(root: typeof rootStore){
        super();
        this.initState();
        this.updateLvlStatus(root.data.lvl)
        root.on("lvl", lvl => {
            this.updateLvlStatus(lvl as number);
        })
    }
    updateLvlStatus(lvl: number){
        this.data.lvlStatus = `Current level: ${lvl}`;
    }
};


export const rootStore = new RootStore; 
export const rootState = rootStore.data;
export const lvlMonitorStore = new LVLMonitor(rootStore);
export const lvlMonitorState = lvlMonitorStore.data;


```

### 2. Make your component aware of your state:

By using the `observeLitElement()` mixin on your `LitElement` class and then just
using the `data` variables in your render method:

```javascript
import { rootState, rootStore, lvlMonitorState } from './stores';
import { observeLitElement } from '../src'
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators'


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
```

The components that read `state.lvl` will automatically re-render when
any (other) component updates it.

In more technical words:

A component using the `observeLitElement()` mixin will re-render (call `requestUpdate()`) when any variabale in `data` - which it read in the last render cycle - changes.
