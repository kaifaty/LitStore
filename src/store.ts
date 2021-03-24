import { LitElement } from 'lit-element';
export type TObserver = () => Promise<unknown>
export type TObserversList = Map<LitElement, Set<string>>;
export interface IStore {
    addComponent(observer: LitElement, keys: Set<string>): void
    removeComponent(observer: LitElement): void
}

type TData = Record<string, unknown>;
type Constructor = new (...args: any[]) => {
    data: TData
};
export function createStore<T extends Constructor>(base: T){
    return class Store extends base implements IStore{
        _observers: TObserversList = new Map();
        constructor(...args: any[]) {
            super();
            this._initStateVars();
        }
        addComponent(component: LitElement, keys: Set<string>) {
            this._observers.set(component, keys);
        }
        removeComponent(component: LitElement) {
            this._observers.delete(component);
        }
        _initStateVars() {        
            if (this.data) {
                const data = this.data
                this.data = {};
                for (let [key, value] of Object.entries(data)) {
                    this._initStateVar(key);
                    this.data[key] = value;
                }
            }
        }
        _initStateVar(key: string) {
            if (this.hasOwnProperty(key)) {
                // Property already defined, so don't re-define.
                return;
            }
            const self = this;
            let value: unknown = null;
            Object.defineProperty(
                this.data,
                key,
                {
                    get() {
                        self._recordRead(key)
                        return value;
                    },
                    set(v: unknown) {
                        if (value !== v) {
                            value = v;
                            self._notifyChange(key);
                        }
                    },
                    configurable: true,
                    enumerable: true
                }
            );

        }
        _recordRead(key: string) {
            stateRecorder.recordRead(this, key);
        }
        _notifyChange(key: string) {
            for (const [component, keys] of this._observers) {
                if (keys.has(key)) {
                    component.requestUpdate();
                }
            };
        }
        }
}

class StateRecorder {
    _log: Map<IStore, Set<string>>
    start() {
        this._log = new Map();
    }
    recordRead(stateObj: IStore, key: string) {
        if (this._log === null) return;
        const keys = this._log.get(stateObj) || new Set()
        keys.add(key);
        this._log.set(stateObj, keys);
    }
    finish() {
        const stateVars = this._log;
        this._log = null;
        return stateVars;
    }

}
export type TRecorder = Map<IStore, Set<string>>
export const stateRecorder = new StateRecorder();