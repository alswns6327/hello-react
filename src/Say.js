import React, { useState } from 'react';

const Say = () => {
    const [message, setMessage] = useState('');
    const onClickEnter = () => setMessage('안녕하다.');
    const onClickLeave = () => setMessage('가냐?');

    const [color, setColor] = useState('black');

    return (
        <div>
            <button onClick={onClickEnter}>옴</button>
            <button onClick={onClickLeave}>감</button>
            <h1 style={{color}}>{message}</h1>
            <button style={{color : 'red'}} onClick={() => {setColor('red')}}>빨간색</button>
            <button style={{color : 'green'}} onClick={() => {setColor('green')}}>초록색</button>
            <button style={{color : 'blue'}} onClick={() => {setColor('blue')}}>파란색</button>
            <h1 style={{color}}>{message}</h1>
        </div>
    );
};

export default Say;