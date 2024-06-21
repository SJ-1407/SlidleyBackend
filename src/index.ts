import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';

const app = express();
const PORT = 3000;
const DB_FILE_PATH = path.join(__dirname, 'db.json');

app.use(cors());
app.use(express.json());

// Ensure the db.json file exists
if (!fs.existsSync(DB_FILE_PATH)) {
  fs.writeFileSync(DB_FILE_PATH, JSON.stringify([]));
}

app.get('/ping', (req, res) => {
  res.send(true);
});

app.post('/submit', (req, res) => {
  const { name, email, phone, github_link, stopwatch_time } = req.body;

  if (!name || !email || !phone || !github_link || !stopwatch_time) {
    return res.status(400).send('All fields are required');
  }

  const newSubmission = { name, email, phone, github_link, stopwatch_time };
  const dbData = JSON.parse(fs.readFileSync(DB_FILE_PATH, 'utf8'));
  dbData.push(newSubmission);
  fs.writeFileSync(DB_FILE_PATH, JSON.stringify(dbData));

  res.status(201).send('Submission saved successfully');
});

app.get('/read', (req, res) => {
  const index = parseInt(req.query.index as string, 10);

  if (isNaN(index)) {
    return res.status(400).send('Invalid index');
  }

  const dbData = JSON.parse(fs.readFileSync(DB_FILE_PATH, 'utf8'));

  if (index < 0 || index >= dbData.length) {
    return res.status(404).send('No submission found at this index');
  }

  res.send(dbData[index]);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
