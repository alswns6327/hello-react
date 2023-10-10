import React, { useState } from 'react';

const Say = () => {
    const [message, setMessage] = useState('');
    const onClickEnter = () => setMessage('안녕하다.');
    const onClickLeave = () => setMessage('가냐?');
    return (
        <div>
            <button onClick={onClickEnter}>옴</button>
            <button onClick={onClickLeave}>감</button>
            <h1>{message}</h1>
        </div>
    );
};

export default Say;