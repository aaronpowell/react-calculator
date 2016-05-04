import { handleActions, Action } from 'redux-actions';
import { UPDATE_CURRENT } from '../actions/types';

export default handleActions<CalculatorStoreState>({
    [UPDATE_CURRENT]: (state: CalculatorStoreState, action: Action) => {
        let current = {
            left: action.payload as number
        } as Equation;

        state.current = current;

        return state;
    }
});
