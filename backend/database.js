const sqlite3 = require('sqlite3').verbose();

// Connect to the database
const db = new sqlite3.Database(':memory:');

// Create tables and insert mock data
const createTables = () => {
  db.serialize(() => {
    db.run(`CREATE TABLE produits (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      price REAL NOT NULL
    )`);

    db.run(`CREATE TABLE commandes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      product_id INTEGER,
      quantity INTEGER NOT NULL,
      FOREIGN KEY(product_id) REFERENCES produits(id)
    )`);

    // Insert mock data
    db.run(`INSERT INTO produits (name, price) VALUES 
      ('Produit A', 10.99), 
      ('Produit B', 15.49), 
      ('Produit C', 20.00)`);
    
    db.run(`INSERT INTO commandes (product_id, quantity) VALUES 
      (1, 2), 
      (2, 1), 
      (3, 5), 
      (1, 3)`);
  });
};

module.exports = { db, createTables };