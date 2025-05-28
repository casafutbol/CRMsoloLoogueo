import express from 'express';
import cors from 'cors';
import { accesoUser } from './CONTROLADORES/USERS/accesoUser';

const app = express();

app.use(cors());
app.use(express.json());

app.post('/acceso', accesoUser);

app.listen(3000, () => {
  console.log('Servidor escuchando en puerto 3000');
});
