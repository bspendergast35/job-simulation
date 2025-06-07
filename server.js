const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { OpenAI } = require('openai');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// OpenAI initialization
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// POST endpoint
app.post('/generate', async (req, res) => {
  const { job, company } = req.body;

  if (!job || !company) {
    return res.status(400).json({ error: 'Job and company are required' });
  }

  try {
    const prompt = `Generate a realistic job scenario for a ${job} working at ${company}. Include challenges specific to the company culture and industry.`;

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7
    });

    const scenario = response.choices[0].message.content.trim();
    res.json({ scenario });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
