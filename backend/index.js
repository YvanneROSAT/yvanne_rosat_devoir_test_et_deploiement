const express = require('express');
const path = require('path');
const { db, createTables } = require('./database');
const app = express();
const port = 3000;

app.use(express.json());

// Initialize database
createTables();

// Serve static files from the frontend directory
app.use(express.static(path.join(__dirname, '../frontend')));

// Serve index.html at the root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.get('/api/produits', (req, res) => {
  db.all('SELECT * FROM produits', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

app.get('/api/commandes', (req, res) => {
  db.all('SELECT * FROM commandes', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});