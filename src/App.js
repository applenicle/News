import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ThemesPage from './pages/ThemesPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/themes" element={<ThemesPage />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
