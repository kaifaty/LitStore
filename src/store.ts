export interface ILitElement {
    requestUpdate(): Promise<unknown>
}
export type TObserver = () => Promise<unknown>
export type TObserversList = Map<ILitElement, Set<string>>;
export interface IStore {
    __addComponent(observer: ILitElement, keys: Set<string>): void
    __removeComponent(observer: ILitElement): void
    on(prop: string, f: (value?: unknown) => void)
    off(prop: string, f: (value?: unknown) => void)
}

type TData = Record<string, unknown>;
export type TRecorder = Map<IStore, Set<string>>
export type Constructor = new (...args: any[]) => {
    data: TData
};

export class StateRecorder {
    static _log: Map<IStore, Set<string>> | null = null
    static start() {
        this._log = new Map();
    }
    static recordRead(stateObj: IStore, key: string) {
        if (this._log === null) return;
        const keys = this._log.get(stateObj) || new Set()
        keys.add(key);
        this._log.set(stateObj, keys);
    }
    static finish() {
        const stateVars = this._log;
        this._log = null;
        return stateVars;
    }
}


export function createStore<T extends Constructor>(base: T){
    return class Store extends base implements IStore{
        __observers: TObserversList = new Map();
        __subscribs: Map<string, ((value: unknown) => void)[]> = new Map();
        __values: Map<string, unknown> = new Map();
        constructor(...args: any[]) {
            super(...args);
            this.__initStateVars();
        }
        on(prop: string, func: (value?: unknown) => void){
            if(!this.__subscribs.has(prop)) {
                this.__subscribs.set(prop, []);
            }
            const sub = this.__subscribs.get(prop);
            sub.push(func);
        }
        off(prop: string, func: (value?: unknown) => void){
            const sub = this.__subscribs.get(prop);
            if(sub){
                this.__subscribs.set(prop, sub.filter(f => f !== func));
            }
        }

        __addComponent(component: ILitElement, keys: Set<string>) {
            this.__observers.set(component, keys);
        }
        __removeComponent(component: ILitElement) {
            this.__observers.delete(component);
        }
        __initStateVars() {        
            if (this.data) {
                const data = this.data;
                this.data = {};
                for (const [key, value] of Object.entries(data)) {
                    this.__initStateVar(key);
                    this.data[key] = value;
                }
            }
        }
        __initStateVar(key: keyof TData) {
            if (this.hasOwnProperty(key)) {
                // Property already defined, so don't re-define.
                return;
            }
            const self = this;
            const values = this.__values; //.set(key, null);
            Object.defineProperty(
                this.data,
                key,
                {
                    get() {
                        StateRecorder.recordRead(self, key);
                        return values.get(key);
                    },
                    set(v: unknown) {
                        if (values.get(key) !== v) {
                            values.set(key, v);
                            self.__notifyChange(key);
                        }
                    },
                    configurable: true,
                    enumerable: true
                }
            );
        }
        __notifyChange(key: keyof TData){
            for (const [component, keys] of this.__observers) {
                if (keys.has(key)) {
                    component.requestUpdate();
                }
            };
            if(this.__subscribs.has(key)){
                for(const f of this.__subscribs.get(key)){
                    f(this.__values.get(key));
                }
            }
        }
        }
}
