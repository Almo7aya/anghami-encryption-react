import React, { useState, useEffect } from 'react';

import { getAppState, auth, getSong, logout } from './utils';

import LoginFields from './LoginFields';
import SongIdField from './SongIdField';
import TokenShower from './TokenShower';
import SongDetails from './SongDetails';

import './main.css';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const [replies, setReplies] = useState(null);

  useEffect(() => {
    getAppState().then(({ data }) => {
      setLoggedIn(data.loggedIn);
      setReplies(data.replies);
    });
  }, [])

  const authentication = async (email, password) => {
    const { data } = await auth(email, password);
    if (data) {
      setLoggedIn(true);
      setReplies(data.replies);
    }
  }

  const loggingOut = async () => {
    const { data } = await logout();
    if (data) {
      setLoggedIn(false);
      setReplies(null);
      setCurrentSong(null);
    }
  }

  const gettingSong = async (songId) => {
    const { data } = await getSong(songId);
    if (data) {
      setCurrentSong(data);
    }
  }

  return (
    <div className="App">

      <h1 className="main-heading text-center">
        Anghami new encryption
      </h1>

      <LoginFields authenticate={authentication} logout={loggingOut} loggedIn={loggedIn} />

      {
        replies && <div>
          <TokenShower title={'Your encrypted auth reply'} token={replies.enReply} />

          <TokenShower title={'Your decrypted auth reply'} token={replies.dnReply} />
        </div>
      }

      <SongIdField loggedIn={loggedIn} getSong={gettingSong} />

      {
        currentSong && <div>
          <TokenShower title={'The song encrypted reply'} token={currentSong.enReply} />

          <TokenShower title={'The song decrypted reply'} token={JSON.stringify(currentSong.dnReply)} />

          <SongDetails songObject={currentSong.dnReply} />
        </div>
      }

    </div>
  );
}

export default App;
