const request = require('supertest');
const express = require('express');

const app = express();
app.use(express.json());

// Mock database setup
const { db, createTables } = require('../database');
createTables();

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

// Tests

describe('GET /api/produits', () => {
  it('should return a list of products', async () => {
    const res = await request(app).get('/api/produits');
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});

describe('GET /api/commandes', () => {
  it('should return a list of orders', async () => {
    const res = await request(app).get('/api/commandes');
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});