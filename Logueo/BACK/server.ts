import express from 'express';
const app = express();
const PORT = 3000;

app.listen(PORT, '192.168.0.29', () => {
  console.log(`Servidor escuchando en http://192.168.0.29:${PORT}`);
});
