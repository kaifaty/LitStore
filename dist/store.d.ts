export interface ILitElement {
    requestUpdate(): Promise<unknown>;
}
export declare type TObserver = () => Promise<unknown>;
export declare type TObserversList = Map<ILitElement, Set<string>>;
export interface IStore {
    __addComponent(observer: ILitElement, keys: Set<string>): void;
    __removeComponent(observer: ILitElement): void;
    on(prop: string, f: (value?: unknown) => void): any;
    off(prop: string, f: (value?: unknown) => void): any;
}
declare type TData = Record<string, number | object | boolean | null | string>;
declare type TFuncEvent = (value: TData[keyof TData]) => void;
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
export declare abstract class BaseStore implements IStore {
    __observers: TObserversList;
    __subscribs: Map<string, TFuncEvent[]>;
    __values: Map<string, TData[keyof TData]>;
    abstract data: TData;
    on(prop: keyof TData, func: (value: unknown) => void): void;
    off(prop: keyof TData, func: (value: unknown) => void): void;
    __addComponent(component: ILitElement, keys: Set<string>): void;
    __removeComponent(component: ILitElement): void;
    initState(): void;
    __initStateVar(key: keyof TData): void;
    __notifyChange(key: keyof TData): void;
}
export {};
