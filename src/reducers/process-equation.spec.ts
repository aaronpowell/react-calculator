import processEquation from './process-equation';
import { UPDATE_CURRENT } from '../actions/types';

import { expect } from 'chai';

describe('processEquation', () => {
    it('should update left', () => {
        const initialState = {
            history: [],
            current: {
                left: ''
            }
        };

        const action = {
            type: UPDATE_CURRENT,
            payload: '1'
        }

        let nextState = processEquation(initialState, action);

        expect(nextState.current.left).to.eq(action.payload);
        expect(initialState.current.left).not.to.eq(action.payload);
    });
});
