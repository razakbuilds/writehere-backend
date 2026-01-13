const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'backend runs fine' });
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server on port ${PORT}`));

module.exports = app;
