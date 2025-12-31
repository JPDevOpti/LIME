import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Pathology } from './pages/Pathology';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pathology" element={<Pathology />} />
      </Routes>
    </Router>
  );
}

export default App;
