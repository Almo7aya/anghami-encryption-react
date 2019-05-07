import React, { useState } from 'react';

export default function ({ authenticate, loggedIn, logout }) {

    const [email, setEmail] = useState('Soso_bebe08@hotmail.com');
    const [password, setPassword] = useState('56568622');

    const handleSubmit = (e) => {
        e.preventDefault();
        authenticate(email, password);
    }

    return (<div className="LoginFields">
        <form className="LoginFields-form" onSubmit={handleSubmit}>
            <input className="LoginFields-input" disabled={loggedIn} type="email" name="email" required onChange={(e) => { setEmail(e.target.value) }} value={email} placeholder="Your email" />
            <input className="LoginFields-input" disabled={loggedIn} type="password" name="password" required onChange={(e) => { setPassword(e.target.value) }} value={password} placeholder="Your password" />
            <div className="text-center">
                <button className="LoginFields-btn" disabled={loggedIn} type="submit">Login</button>
                <button className="LoginFields-btn" type="button" onClick={() => {
                    setEmail('');
                    setPassword('');
                    logout();
                }}>Logout</button>
            </div>
        </form>
    </div>);
}
