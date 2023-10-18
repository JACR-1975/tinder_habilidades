const express = require('express');
const bodyParser = require('body-parser');
const { Client } = require('pg');

const app = express();
const port = 3000;

const db = new Client({
  user: 'john_caro',
  host: 'localhost',
  database: 'tinder_habilidades',
  password: '1234',
  port: 5432,
});

db.connect()
  .then(() => console.log('Conexión exitosa a PostgreSQL'))
  .catch(err => console.error('Error de conexión a PostgreSQL', err));

app.use(bodyParser.json());

// Rutas de ejemplo
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.get('/usuarios', (req, res) => {
  const { habilidad } = req.query;
  const query = `SELECT * FROM usuarios WHERE habilidades LIKE '%${habilidad}%'`;
  
  db.query(query)
    .then(result => res.json(result.rows))
    .catch(err => res.status(500).json({ error: err.message }));
});

app.listen(port, () => {
  console.log(`Servidor Express en ejecución en el puerto ${port}`);
});
