/**
 * My first action.
 * An action is just an interface.
 */
export interface Action {
    type: string;
    payload?: any;
}