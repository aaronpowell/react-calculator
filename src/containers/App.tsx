import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateCurrentAction } from '../actions/index';

import Display from '../components/Display';

class App extends React.Component<any, any> {
    render() {
        var { dispatch, current } = this.props;

        var actions = bindActionCreators({ updateCurrentAction }, dispatch);

        return (
            <div>
                <Display value={current ? current.left : '' }
                         keyPress={e => actions.updateCurrentAction(e)}
                         />
            </div>
        );
    }
}

const mapStateToProps = (state: CalculatorStoreState) => state;

export default connect(mapStateToProps)(App);
