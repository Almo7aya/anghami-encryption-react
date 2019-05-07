import React from 'react';

export default function ({ songObject }) {
    if (songObject) {
        const songD = songObject.sections[0].data[0];
        return (<div className="SongDetails">
            <div className="SongDetails-image-holder">
                <img src={`https://anghamicoverart1.akamaized.net/webp/?id=${songD.coverArt}&size=296`} alt="" />
            </div>
            <div className="SongDetails-info text-center">
                <p>
                    {songD.title}
                </p>
                <p>
                    {songD.album}
                </p>
                <p>
                    {songD.artist}
                </p>
                <audio src={songD.location} controls autoPlay />
            </div>
        </div>);
    }
}
