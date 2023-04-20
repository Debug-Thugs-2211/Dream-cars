import React, { useState } from 'react';

export const Login = (props) => {
    const { email, setEmail } = useState('');
    const { pass, SetPass } = useState('');

    const sumbitted = () => {
        e.preventDefault()
    }
    return(
        <div className='auth-container'>
            <h2>Login</h2>
        <form className='login-form' onSubmit={sumbitted}>
            <label htmlFor='email'>Email</label>
            <input value={email} type="email" placeholder="example@gmail.com" id='email' name='email'></input>
            <label htmlFor='password'>Password</label>
            <input value={pass} type="password" placeholder="*******" id='password' name='password'></input>
            <button type='submit'>Log in</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch("Login")}>Oops! Don't have an account? Register Now!</button>
        </div>
    )
}

