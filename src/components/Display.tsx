import * as React from 'react';
import Button from './Button';
import History from './History';

const Display = ({ keyPress, value, history }) => {
    let buttons = [0,1,2,3,4,5,6,7,8,9, '+', '='].map(num => <Button key={num} click={keyPress} value={num} />);

    return (
        <div>
            <section>
                <input type='text'
                    value={value}
                    onKeyPress={e => keyPress(e.key)} />
                <div className='buttons'>
                    {buttons}
                </div>
            </section>
            <aside>
                <History history={history} />
            </aside>
        </div>
    );
};

export default Display;
