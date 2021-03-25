export interface ILitElement {
    requestUpdate(): Promise<unknown>;
}
export declare type TObserver = () => Promise<unknown>;
export declare type TObserversList = Map<ILitElement, Set<string>>;
export interface IStore {
    addComponent(observer: ILitElement, keys: Set<string>): void;
    removeComponent(observer: ILitElement): void;
}
declare type TData = Record<string, unknown>;
export declare type TRecorder = Map<IStore, Set<string>>;
export declare type Constructor = new (...args: any[]) => {
    data: TData;
};
export declare class StateRecorder {
    static _log: Map<IStore, Set<string>> | null;
    static start(): void;
    static recordRead(stateObj: IStore, key: string): void;
    static finish(): Map<IStore, Set<string>>;
}
export declare function createStore<T extends Constructor>(base: T): {
    new (...args: any[]): {
        _observers: TObserversList;
        addComponent(component: ILitElement, keys: Set<string>): void;
        removeComponent(component: ILitElement): void;
        _initStateVars(): void;
        _initStateVar(key: string): void;
        _recordRead(key: string): void;
        _notifyChange(key: string): void;
        data: TData;
    };
} & T;
export {};
