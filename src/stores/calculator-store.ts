import { createStore, compose } from 'redux';
import calculatorReducer from '../reducers/index';
import { persistState } from 'redux-devtools';
import DevTools from '../components/DevTools';

declare var module: any;
declare var require: any;

const enhancer = compose(
    DevTools.instrument() as any,
    persistState(getDebugSessionKey()) as any
);

function getDebugSessionKey () {
    const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
    return (matches && matches.length > 0) ? matches[1] : null;
}

const initialState = {
    history: [],
    current: undefined,
    currentAnswer: undefined
} as CalculatorStoreState;

export default function createCalculatorStore() {
    const store = createStore(calculatorReducer, initialState, enhancer);

    // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
    if (module.hot) {
        module.hot.accept('../reducers', () =>
            store.replaceReducer(require('../reducers/index'))
        );
    }

    return store;
}
