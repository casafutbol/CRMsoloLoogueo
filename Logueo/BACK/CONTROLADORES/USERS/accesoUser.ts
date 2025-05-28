import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET no está definido en el archivo .env");
}

// Ejemplo de usuarios simulados
const usuarios = [
  { id: 1, email: 'usuario@ejemplo.com', password: '1234' }
];

export const accesoUser = (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email y contraseña requeridos' });
  }

  const usuario = usuarios.find(u => u.email === email && u.password === password);
  if (!usuario) {
    return res.status(401).json({ error: 'Credenciales incorrectas' });
  }

  const token = jwt.sign({ id: usuario.id, email: usuario.email }, JWT_SECRET, {
    expiresIn: '2h'
  });

  return res.json({ mensaje: 'Acceso autorizado', token });
};
