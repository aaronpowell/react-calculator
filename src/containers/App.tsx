import * as React from 'react';
import { IDispatch, IActionGeneric } from 'redux';
import { connect } from 'react-redux';

class App extends React.Component<any, any> {
    render() {
        return (
            <div>
                <h1>Hello World</h1>
            </div>
        );
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(App);
