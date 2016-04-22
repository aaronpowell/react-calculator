import { createAction, Action } from 'redux-actions';
import { SET_LEFT } from './types';

const setLeft = createAction<number>(
    SET_LEFT,
    (value: number) => value
);

export {
    setLeft
};
