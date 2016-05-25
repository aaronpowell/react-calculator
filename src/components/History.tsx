import * as React from 'react';

const History = ({ history }) => {
    if (!history.length) {
        return null;
    }

    return (
        <div>
            <h1>Calculation History</h1>
            <ul className='history'>
            {history.map((h, i) => <li key={i}>{h.left} {h.operand} {h.right}</li>)}
            </ul>
        </div>
    )
};

export default History;
