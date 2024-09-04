import express from 'express';
import pkg from 'pg';
import cors from 'cors';
import bodyParser from 'body-parser';

const { Pool } = pkg;

const app = express();
const port = 3001; // Puedes cambiar el puerto si es necesario

app.use(cors());
app.use(bodyParser.json());

// Configuración de la conexión a la base de datos PostgreSQL
const pool = new Pool({
  host: 'localhost',
  user: 'postgres', // Cambia a tu usuario de PostgreSQL
  password: 'marcoa', // Cambia a tu contraseña de PostgreSQL
  database: 'emailMKT', // Nombre de tu base de datos
  port: 5432, // Puerto de PostgreSQL, el valor por defecto es 5432
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