import React from 'react';
import UserCard from './components/UserCard';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [user, setUser] = useState({});

  const getUser = () => {
    axios
      .get('https://randomuser.me/api?nat=en')
      .then((response) => response.data)
      .then((data) => {
        setUser(data.results[0]);
      });
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="App">
      <UserCard user={user} />
      <button type="button" onClick={getUser}>
        Get user{' '}
      </button>
    </div>
  );
}
export default App;
