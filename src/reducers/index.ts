import { handleActions, Action } from 'redux-actions';
import { SET_LEFT } from '../actions/types';

export default handleActions<CalculatorStoreState>({
    [SET_LEFT]: (state: CalculatorStoreState, action: Action) => {
        let current = {
            left: action.payload as number
        } as Equation;

        state.current = current;

        return state;
    }
});
