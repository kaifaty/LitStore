import { StateRecorder, IStore, TRecorder} from './store';

export type PropertyValues<T = any> =
    keyof T extends PropertyKey ? Map<keyof T, unknown>: never;

type Constructor<T> = new(...args: any[]) => T;
interface CustomElement {
    connectedCallback?(): void;
    disconnectedCallback?(): void;
    requestUpdate(): Promise<unknown>
    readonly isConnected: boolean;
  }
  
export const createLitStore = <T extends Constructor<CustomElement>>(LitElement: T) => {
    return class  extends LitElement {
        _usedStores: Set<IStore> = new Set();
        disconnectedCallback(): void {
            super.disconnectedCallback();
            this._clearObservers();
        }
        update(changedProperties: PropertyValues): void  {
            StateRecorder.start();
            //@ts-ignore
            super.update(changedProperties);
            this._initStateObservers();
        }
        _initStateObservers(): void  {
            this._clearObservers();
            if (!this.isConnected) return;
            this._addObservers(StateRecorder.finish());
        }
        _addObservers(usedStores: TRecorder): void  {
            for (let [store, keys] of usedStores) {
                store.addComponent(this, keys);
                this._usedStores.add(store);
            }
        }
        _clearObservers(): void {
            for(const store of this._usedStores){
                store.removeComponent(this);
            }
            this._usedStores.clear();
        }
    } 
}
