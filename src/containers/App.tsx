import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateCurrentAction } from '../actions/index';

import Display from '../components/Display';

const mapStateToProps = (state: CalculatorStoreState) => state;
const mapDispatchToProps = (dispatch) => bindActionCreators({ updateCurrentAction }, dispatch);

type Props = CalculatorStoreState & { updateCurrentAction }

class App extends React.Component<Props, void> {
    render() {
        var { current, currentAnswer, history, updateCurrentAction } = this.props;

        var value = currentAnswer || (current.operand ? current.right : current.left);

        return (
            <Display value={value}
                     history={history}
                     keyPress={e => updateCurrentAction(e)} />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
