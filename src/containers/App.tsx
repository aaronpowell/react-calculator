import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateCurrentAction } from '../actions/index';

import Display from '../components/Display';

class App extends React.Component<IComponentProps, any> {
    render() {
        var { dispatch, current, currentAnswer, history } = this.props;

        var actions = bindActionCreators({ updateCurrentAction }, dispatch);

        var value = currentAnswer || (current.operand ? current.right : current.left);

        return (
            <Display value={value}
                     history={history}
                     keyPress={e => actions.updateCurrentAction(e)} />
        );
    }
}

const mapStateToProps = (state: CalculatorStoreState) => (console.dir(state), state);

export default connect<IComponentProps>(mapStateToProps, mapDispatchToProps)(App);
