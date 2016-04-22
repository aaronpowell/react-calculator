import { createStore } from 'redux';
import calculatorReducer from '../reducers';

const initialState = {
    history: [],
    current: undefined,
    currentAnswer: undefined
} as CalculatorStoreState;

export default function createCalculatorStore() {
    const store = createStore(calculatorReducer, initialState);

    return store;
}
