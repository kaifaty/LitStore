import { stateRecorder, IStore, TRecorder} from './store';

export type PropertyValues<T = any> =
    keyof T extends PropertyKey ? Map<keyof T, unknown>: never;

type Constructor<T> = new(...args: any[]) => T;
interface CustomElement {
    connectedCallback?(): void;
    disconnectedCallback?(): void;
    readonly isConnected: boolean;
  }
  
export const createLitStore = <T extends Constructor<CustomElement>>(LitElement: T) => {
    return class  extends LitElement {
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
}
