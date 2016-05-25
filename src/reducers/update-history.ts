import { handleActions, Action } from 'redux-actions';
import { UPDATE_CURRENT } from '../actions/types';
import initialState from '../stores/initial-state';

export default handleActions<CalculatorStoreState>({
    [UPDATE_CURRENT]: (state: CalculatorStoreState, action: Action) => {
        let value = action.payload.toString();

        if (value !== '=') {
            return state;
        }

        let { current } = state;

        return {
            history: [current, ...state.history],
            current: { left: undefined },
            currentAnswer: state.currentAnswer
        };
    }
}, initialState);
