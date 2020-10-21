import React, { useEffect, useState } from 'react'
import logo from '../logo.svg';

const Home = () => {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    fetch('https://api.megapixel23.com/lessons')
      .then(async (response) => {
        const data = await response.json();

        setLessons(data);
      })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          {lessons.map(({ id, url, title }) => (
            <div key={id}>
              <a href={url}>{title}</a>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
};

export default Home;
