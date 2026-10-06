import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Portfolio API is running' });
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Please fill in all fields.' });
  }
  console.log(`New contact from ${name} <${email}>: ${message}`);
  res.status(201).json({ success: true, message: 'Thanks! Your message has been received.' });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
