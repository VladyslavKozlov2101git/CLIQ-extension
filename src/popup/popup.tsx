import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './popup.css';
import { getData, Hero } from '../utils/api';

const App: React.FC<{}> = () => {
  const [dataPerson, setDataPerson] = useState<Hero | null>();
  const [count, setCount] = useState(0);
  const [link, setLink] = useState('');
  useEffect(() => {
    getData(Math.floor(Math.random() * 10) + 1).then((data) => {
      setDataPerson(data);
    });
  }, []);

  if (!dataPerson) {
    return <div>Loading...</div>;
  }

  chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
    let url = tabs[0].url;
    setLink(url);
  });

  return (
    <div>
      <h1>Here will be your random hero from Star Wars</h1>
      <div className="card">
        <h2>Name: {dataPerson.name}</h2>

        <p>Mass: {dataPerson.mass}</p>
        <p>Gender: {dataPerson.gender}</p>
        <b>Current Page Link: {link}</b>
      </div>
      <button>Close popup</button>
    </div>
  );
};

const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<App />, root);
