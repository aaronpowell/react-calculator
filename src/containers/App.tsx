import * as React from 'react';
import { IDispatch, IActionGeneric, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Display from '../components/Display';

class App extends React.Component<any, any> {
    render() {
        var { dispatch, current } = this.props;
        return (
            <div>
                <Display value={current ? current.left : '' }
                         keyPress={e => dispatch({ type: 'SET_LEFT' })}
                         />
            </div>
        );
    }
}

const mapStateToProps = (state: CalculatorStoreState) => state;

export default connect(mapStateToProps)(App);
