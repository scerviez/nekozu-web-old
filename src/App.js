import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';


function App() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <h1>Welcome To Nekozu Website</h1>
      <h2>
        See Our Channel At{' '}
        <a
          href="https://t.me/nekozu"
          target="_blank"
          rel="noreferrer noopener"
        >
          Telegram
        </a>
        !
      </h2>
      <p>
        Nekozu Is A Channel At Telegram To Create A Multifunction Bot And Open Source
        .
      </p>
      <br />
      <h2>Date Now:</h2>
      <p>{date ? date : 'Loading date...'}</p>
    <div>
      Bot Docs
      <BottomNav name='home' />
    </div>
    </main>
  );
}

export default App;
