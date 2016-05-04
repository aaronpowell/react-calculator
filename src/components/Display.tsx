import * as React from 'react';

const Display = ({ keyPress, value }) => (
    <div>
        <input type='text'
               value={value}
               onKeyPress={e => keyPress(e)} />
    </div>
);

export default Display;
