'use strict';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { getConnection } from '../services/mysql'

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello world!' });
});

app.get('/lessons', async (req, res) => {
  const conn = await getConnection();
  const [lessons] = await conn.query('SELECT * FROM `lessons`');

  res.json(lessons);
});

app.post('/lessons', async (req, res) => {
  const { title, url } = req.body;
  const conn = await getConnection();
  const [{ insertId }] = await conn.execute(
    'INSERT INTO `lessons` (title, url) VALUES (?, ?)',
    [title, url]
  );
  const [lesson] = await conn.query('SELECT * FROM `lessons` WHERE id = ?', [insertId]);

  res.json(lesson);
});

const server = app.listen(process.env.PORT || 3003, () => {
  console.log(`server running at port http://localhost:${server.address().port}`);
});
