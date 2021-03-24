import { LitElement, PropertyValues } from 'lit-element';
import { stateRecorder, IStore, TRecorder } from './store';


export class LitStore extends LitElement {
    private _usedStores: Set<IStore> = new Set();
    disconnectedCallback(): void {
        super.disconnectedCallback();
        this._clearObservers();
    }
    public update(changedProperties: PropertyValues): void  {
        stateRecorder.start();
        super.update(changedProperties);
        this._initStateObservers();
    }
    private _initStateObservers(): void  {
        this._clearObservers();
        if (!this.isConnected) return;
        this._addObservers(stateRecorder.finish());
    }
    private _addObservers(usedStores: TRecorder): void  {
        for (let [store, keys] of usedStores) {
            store.addComponent(this, keys);
        }
    }
    private _clearObservers(): void {
        for(const vals of this._usedStores){
            vals.removeComponent(this);
        }
    }
}
