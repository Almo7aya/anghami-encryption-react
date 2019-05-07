import React, { useState } from 'react';

export default function ({ token, title }) {

    const [expand, setExpand] = useState(false);

    return (<div className="TokenShower">
        <h3 className="text-center">{title}</h3>

        <pre className={`token-container ${expand && 'expanded'}`}>
            <button onClick={() => setExpand(!expand)} className="token-expand-btn">Expand</button>
            {token}
        </pre>
    </div>);
}
