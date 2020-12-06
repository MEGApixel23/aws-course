import React, { useEffect, useState } from 'react';
import logo from '../logo.svg';
import AddNewLesson from '../components/AddNewLesson'

const Home = () => {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    fetch('https://3pnightw08.execute-api.eu-central-1.amazonaws.com/dev/lessons')
      .then(async (response) => {
        const data = await response.json();

        setLessons(data);
      });
  }, []);

  const addNewLesson = (lesson) => {
    setLessons([
      ...lessons,
      lesson,
    ]);
  };

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
        <AddNewLesson onAdded={addNewLesson} />
      </header>
    </div>
  );
};

export default Home;
