export interface Action<T> {
    (parameter: T): void;
}