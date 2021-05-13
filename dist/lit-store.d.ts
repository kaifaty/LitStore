import { IStore, TRecorder } from './store';
export declare type PropertyValues<T = any> = keyof T extends PropertyKey ? Map<keyof T, unknown> : never;
declare type Constructor<T> = new (...args: any[]) => T;
interface CustomElement {
    connectedCallback?(): void;
    disconnectedCallback?(): void;
    requestUpdate(): void;
    readonly isConnected: boolean;
}
export declare const observeLitElement: <T extends Constructor<CustomElement>>(LitElement: T) => {
    new (...args: any[]): {
        _usedStores: Set<IStore>;
        disconnectedCallback(): void;
        update(changedProperties: Map<string | number | symbol, unknown>): void;
        _initStateObservers(): void;
        _addObservers(usedStores: TRecorder): void;
        _clearObservers(): void;
        connectedCallback?(): void;
        requestUpdate(): void;
        readonly isConnected: boolean;
    };
} & T;
export {};
