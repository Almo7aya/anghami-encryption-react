import React, { useState } from 'react';

export default function ({ loggedIn, getSong }) {

    const [songId, setSongId] = useState('49454018');

    const handleSubmit = (e) => {
        e.preventDefault();
        getSong(songId);
    }

    return (<div className="LoginFields">
        {
            !loggedIn ? <h3 className="text-center">Please Login First</h3> : <h3 className="text-center">Enter a Valid Song ID</h3>
        }
        <form className="LoginFields-form" onSubmit={handleSubmit}>
            <input className="LoginFields-input" disabled={!loggedIn} type="text" name="songId" required onChange={(e) => { setSongId(e.target.value) }} value={songId} placeholder="SongId" />
            <div className="text-center">
                <button className="LoginFields-btn" disabled={!loggedIn} type="submit">Get</button>
            </div>
        </form>
    </div>);
}
