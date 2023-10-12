import React, { useState } from 'react';

const EventPracticeUseFunc = () => {

    // const [message, setMessage] = useState('');
    // const [message2, setMessage2] = useState('');
    // const [message3, setMessage3] = useState('');

    // const onChangeMessage = e => setMessage(e.target.value);
    // const onChangeMessage2 = e => setMessage2(e.target.value);
    // const onChangeMessage3 = e => setMessage3(e.target.value);

    const [form, setForm] = useState({
        message : '',
        message2 : '',
        message3 : ''
    });

    const onChangeMessage = e => {
        const nextForm = {
            ...form,
            [e.target.name] : e.target.value
        }
        setForm(nextForm)
    };

    const onClick = () => {
        alert('11');
        setForm({
            message : '1',
            message2 : '2',
            message3 : '3'
        })
    }

    const onKeyDown = e => {
        console.log(e.key);
        if(e.key === 'Enter'){
            onClick();
        }
    }

    return (
        <div>
            <h1>h</h1>
            <input
                type='text'
                name='message'
                placeholder='3'
                value={form.message}
                onChange={onChangeMessage}
            />
            <input
                type='text'
                name='message2'
                placeholder='2'
                value={form.message2}
                onChange={onChangeMessage}
            />
            <input
                type='text'
                name='message3'
                placeholder='3'
                value={form.message3}
                onChange={onChangeMessage}
                onKeyDown={onKeyDown}
            />
            <button onClick={onClick}>button</button>
        </div>
    );
};

export default EventPracticeUseFunc;