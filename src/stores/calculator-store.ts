import { createStore, compose } from 'redux';
import processEquation from '../reducers/process-equation';
import updateHistory from '../reducers/update-history';
import { persistState } from 'redux-devtools';
import initialState from './initial-state';

declare var module: any;
declare var require: any;

const enhancer = compose(
    window['devToolsExtension'] ? window['devToolsExtension']() : f => f
);

function combineReducers (...reducers) {
    return (prev, curr) =>
        reducers.reduce(
            (p, r) => r(p, curr)
            , prev
        );
}

export default function createCalculatorStore() {
    const store = createStore(combineReducers(processEquation, updateHistory), enhancer);

    // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
    if (module.hot) {
        module.hot.accept('../reducers/process-equation', () =>
            store.replaceReducer(require('../reducers/process-equation'))
        );
    }

    return store;
}
