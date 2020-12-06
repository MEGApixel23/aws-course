import React, { useCallback, useState } from 'react';

const AddNewLesson = ({ onAdded }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  const onSubmit = useCallback((e) => {
    e.preventDefault();

    (async () => {
      const rawResponse = await fetch('https://3pnightw08.execute-api.eu-central-1.amazonaws.com/dev/lessons', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, url })
      });
      const lesson = await rawResponse.json();

      setIsVisible(false);
      onAdded && onAdded(lesson);
    })()
  }, [title, url]);

  if (isVisible === false) {
    return (
      <button onClick={() => setIsVisible(true)}>Add new lesson</button>
    );
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" value={title} onChange={({ target: { value } }) => setTitle(value)} />
      </div>
      <div>
        <label htmlFor="url">URL</label>
        <input id="url" type="text" value={url} onChange={({ target: { value } }) => setUrl(value)} />
      </div>
      <button type="submit">Add</button>
    </form>
  )
};

export default AddNewLesson;
