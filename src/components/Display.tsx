import * as React from 'react';
import Button from './Button';

const Display = ({ keyPress, value }) => {
    let buttons = [0,1,2,3,4,5,6,7,8,9].map(num => <Button key={num} click={keyPress} value={num} />);

    return (
        <div>
            <input type='text'
                value={value}
                onKeyPress={e => keyPress(e)} />
            <div className='buttons'>
                {buttons}
            </div>
        </div>
    );
};

export default Display;
