import { stateRecorder } from './store';
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
            stateRecorder.start();
            //@ts-ignore
            super.update(changedProperties);
            this._initStateObservers();
        }
        _initStateObservers() {
            this._clearObservers();
            if (!this.isConnected)
                return;
            this._addObservers(stateRecorder.finish());
        }
        _addObservers(usedStores) {
            for (let [store, keys] of usedStores) {
                store.addComponent(this, keys);
            }
        }
        _clearObservers() {
            for (const vals of this._usedStores) {
                vals.removeComponent(this);
            }
        }
    };
};
