const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const generateScenario = require('./generateScenario');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/', generateScenario);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
