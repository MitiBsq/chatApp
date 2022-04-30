import React, { useState } from 'react';

export default function EnterUsername(props) {
    const [value, setValue] = useState('');

    //Username must start with Letters not numbers
    function handleChange(e) {
        const { value } = e.target;
        if (value > 0 || value < 0 || value === '0') {
        } else {
            setValue(value);
        }
    }

    function handleClick(e) {
        e.preventDefault();
        //No empty username
        if (value.trim() !== '') {
            props.username(value);
        }
    }

    return (
        <div >
            <form className='enterUsername'>
                <label htmlFor="userEnter">Enter your username</label>
                <input type='text' value={value} name="userEnter" onChange={handleChange} className='form-control' />
                <button onClick={handleClick} className='btn btn-primary btn-lg'>Enter Chat</button>
            </form>
        </div>
    )
}