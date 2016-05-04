import * as React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import createCalculatorStore from './stores/calculator-store';

import App from './containers/App';
import DevTools from './components/DevTools';

const store = createCalculatorStore();

render(
    <Provider store={store}>
        <div>
            <App />
            <DevTools />
        </div>
    </Provider>,
    document.getElementById('main')
);
