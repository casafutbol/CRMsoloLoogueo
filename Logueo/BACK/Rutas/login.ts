import { Router } from 'express';

const router = Router();

// Usuario y contraseña ficticios
const USUARIO = 'admin';
const PASSWORD = '1234';

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === USUARIO && password === PASSWORD) {
    return res.status(200).json({ message: 'Login correcto' });
  }

  return res.status(401).json({ message: 'Credenciales inválidas' });
});

export default router;
