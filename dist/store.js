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
export class BaseStore {
    constructor() {
        this.__observers = new Map();
        this.__subscribs = new Map();
        this.__values = new Map();
    }
    on(prop, func) {
        if (!this.__subscribs.has(prop)) {
            this.__subscribs.set(prop, []);
        }
        const sub = this.__subscribs.get(prop);
        sub.push(func);
    }
    off(prop, func) {
        const sub = this.__subscribs.get(prop);
        if (sub) {
            this.__subscribs.set(prop, sub.filter(f => f !== func));
        }
    }
    __addComponent(component, keys) {
        this.__observers.set(component, keys);
    }
    __removeComponent(component) {
        this.__observers.delete(component);
    }
    initState() {
        if (this.data) {
            const data = this.data;
            this.data = {};
            for (const [key, value] of Object.entries(data)) {
                this.__initStateVar(key);
                this.data[key] = value;
            }
        }
    }
    __initStateVar(key) {
        if (this.hasOwnProperty(key)) {
            // Property already defined, so don't re-define.
            return;
        }
        const self = this;
        const values = this.__values; //.set(key, null);
        Object.defineProperty(this.data, key, {
            get() {
                StateRecorder.recordRead(self, key);
                return values.get(key);
            },
            set(v) {
                if (values.get(key) !== v) {
                    values.set(key, v);
                    self.__notifyChange(key);
                }
            },
            configurable: true,
            enumerable: true
        });
    }
    __notifyChange(key) {
        for (const [component, keys] of this.__observers) {
            if (keys.has(key)) {
                component.requestUpdate();
            }
        }
        ;
        if (this.__subscribs.has(key)) {
            for (const f of this.__subscribs.get(key)) {
                f(this.__values.get(key));
            }
        }
    }
}
