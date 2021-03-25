export class StateRecorder {
    static start() {
        this._log = new Map();
    }
    static recordRead(stateObj, key) {
        if (this._log === null)
            return;
        const keys = this._log.get(stateObj) || new Set();
        keys.add(key);
        this._log.set(stateObj, keys);
    }
    static finish() {
        const stateVars = this._log;
        this._log = null;
        return stateVars;
    }
}
StateRecorder._log = null;
export function createStore(base) {
    return class Store extends base {
        constructor(...args) {
            super();
            this._observers = new Map();
            this._initStateVars();
        }
        addComponent(component, keys) {
            this._observers.set(component, keys);
        }
        removeComponent(component) {
            this._observers.delete(component);
        }
        _initStateVars() {
            if (this.data) {
                const data = this.data;
                this.data = {};
                for (let [key, value] of Object.entries(data)) {
                    this._initStateVar(key);
                    this.data[key] = value;
                }
            }
        }
        _initStateVar(key) {
            if (this.hasOwnProperty(key)) {
                // Property already defined, so don't re-define.
                return;
            }
            const self = this;
            let value = null;
            Object.defineProperty(this.data, key, {
                get() {
                    StateRecorder.recordRead(self, key);
                    return value;
                },
                set(v) {
                    if (value !== v) {
                        value = v;
                        self._notifyChange(key);
                    }
                },
                configurable: true,
                enumerable: true
            });
        }
        _recordRead(key) {
        }
        _notifyChange(key) {
            for (const [component, keys] of this._observers) {
                if (keys.has(key)) {
                    component.requestUpdate();
                }
            }
            ;
        }
    };
}
