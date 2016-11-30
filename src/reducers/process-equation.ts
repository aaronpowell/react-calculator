import { handleActions, Action } from 'redux-actions';
import { UPDATE_CURRENT } from '../actions/types';
import initialState from '../stores/initial-state';
import * as mathy from 'mathy';

export default handleActions<CalculatorStoreState, string>({
    [UPDATE_CURRENT]: (state: CalculatorStoreState, action: Action<string>) => {
        let value = action.payload;
        let { current } = state;
        var currentAnswer;

        switch (value) {
            case '+':
            case '-':
            case '/':
            case '*':
                current = { left: current.left, operand: value, right: undefined };
                break;

            case '=':
                var engine = new mathy.Engine({
                    name: 'a',
                    derivation: `${current.left} ${current.operand} ${current.right}`,
                    result: true
                });
                var result = engine.process();
                currentAnswer = result[0];
                break;

            default:
                if (current.operand) {
                    current = Object.assign({}, current, { right: (current.right || '') + value });
                } else {
                    current = {
                        left: (current.left || '') + value
                    };
                }
                break;
        }

        return Object.assign({}, state, { current, currentAnswer });
    }
}, initialState);
