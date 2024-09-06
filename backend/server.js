import express from 'express';
import pkg from 'pg';
import cors from 'cors';
import bodyParser from 'body-parser';

const { Pool } = pkg;

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// Configuración de la conexión a la base de datos PostgreSQL
// const pool = new Pool({
//   host: 'localhost',
//   user: 'postgres',
//   password: 'marcoa',
//   database: 'emailMKT',
//   port: 5432,
// });

const pool = new Pool({
  host: '18.205.103.247',  // IP pública de la instancia EC2
  user: 'postgres',
  password: 'marcoa',
  database: 'emailPrueba',
  port: 5432,
});


pool.connect((err) => {
  if (err) {
    console.error('Error conectando a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos PostgreSQL');
});

// Ruta para manejar el almacenamiento de datos del formulario
app.post('/registers', (req, res) => {
  const { name, phone_number, email } = req.body;
  const sql = 'INSERT INTO registers (name, phone_number, email) VALUES ($1, $2, $3)';
  pool.query(sql, [name, phone_number, email], (err, result) => {
    if (err) {
      console.error('Error al insertar datos:', err);
      res.status(500).send('Error al insertar datos en la base de datos');
      return;
    }
    res.status(200).send('Datos insertados exitosamente');
  });
});


app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});