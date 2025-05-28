import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Paxinas/login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* otras rutas */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

