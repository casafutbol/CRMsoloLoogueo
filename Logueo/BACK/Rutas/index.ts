import dotenv from 'dotenv';

dotenv.config();

console.log('JWT_SECRET:', process.env.JWT_SECRET);

import express from 'express';
import cors from 'cors';
import loginRouter from './login.js'; // ← Asegúrate de que exista

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors()); // Permite conexiones desde tu FRONT
app.use(express.json()); // Para leer JSON en req.body

// Ruta de login
app.use('/login', loginRouter);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://192.168.0.29:${PORT}`);
});
