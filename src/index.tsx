import * as React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import createCalculatorStore from './stores/calculator-store';

import App from './containers/App';

const store = createCalculatorStore();

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('main')
);
