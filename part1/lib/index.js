'use strict';
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello world!' });
});

app.get('/lessons', (req, res) => {
  res.json([
    {
      id: 1,
      title: 'Part 0',
      url: 'https://www.notion.so/mpx23/Part-0-S3-CloudFront-and-IAM-57919dc010374552988f0ed71ff7ddf3'
    }, {
      id: 2,
      title: 'Part 1',
      url: 'https://www.notion.so/mpx23/Part-1-Elastic-Beanstalk-e776ae61957044e3af1b6eb1c2a2dc09'
    }
  ]);
});

const server = app.listen(process.env.PORT || 3003, () => {
  console.log(`server running at port http://localhost:${server.address().port}`);
});
