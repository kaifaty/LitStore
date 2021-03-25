import { StateRecorder } from './store';
export const createLitStore = (LitElement) => {
    return class extends LitElement {
        constructor() {
            super(...arguments);
            this._usedStores = new Set();
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            this._clearObservers();
        }
        update(changedProperties) {
            StateRecorder.start();
            //@ts-ignore
            super.update(changedProperties);
            this._initStateObservers();
        }
        _initStateObservers() {
            this._clearObservers();
            if (!this.isConnected)
                return;
            this._addObservers(StateRecorder.finish());
        }
        _addObservers(usedStores) {
            for (let [store, keys] of usedStores) {
                store.addComponent(this, keys);
                this._usedStores.add(store);
            }
        }
        _clearObservers() {
            for (const store of this._usedStores) {
                store.removeComponent(this);
            }
            this._usedStores.clear();
        }
    };
};
