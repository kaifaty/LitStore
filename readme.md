# LitStore

Idea based on https://github.com/gitaarik/lit-state realisation.
Instead version of gitaarik this realisation more optimised and written on typescript.

### Simple shared app state management for LitElement.

LitStore automatically re-renders your LitElement components, when a shared app
state variable they use changes. It's like LitElement's
[properties](https://lit-element.polymer-project.org/guide/properties), but
then shared over multiple components.

It's tiny, simple but still powerful, just like
[LitElement](https://lit-element.polymer-project.org/) and
[lit-html](https://lit-html.polymer-project.org/).

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


## Usage

### 1. Create a `LitStore` object:

```javascript
import { createStore, createLitStore } from './src'
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
```

### 2. Make your component aware of your state:

By using the `observeLitElement()` mixin on your `LitElement` class and then just
using the `data` variables in your render method:

```javascript

@customElement("demo-comp")
class DemoComponent extends observeLitElement(LitElement) {
    render() {
        return html`
            <h2>${state.userName}</h2>
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
```

The components that read `state.lvl` will automatically re-render when
any (other) component updates it.

In more technical words:

A component using the `observeLitElement()` mixin will re-render when any variabale in `data` - which it read in the last render cycle - changes.