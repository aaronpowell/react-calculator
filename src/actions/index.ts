import { createAction } from 'redux-actions';
import { UPDATE_CURRENT } from './types';

const updateCurrentAction = createAction<string>(UPDATE_CURRENT);

export {
    updateCurrentAction
};
