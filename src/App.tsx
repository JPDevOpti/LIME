import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Home } from './pages/public/Home';
import { Hub } from './pages/hub/Hub';
import { ServiceDetail } from './pages/public/ServiceDetail';
import { PatologyDetail } from './pages/public/PatologyDetail';
import { Results } from './pages/public/Results';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    // Immediate scroll to top
    window.scrollTo(0, 0);
    
    // Sometimes browser scroll restoration or heavy content rendering 
    // can override the initial scroll. A tiny timeout ensures we stay at top.
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);
    
    return () => clearTimeout(timer);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hub" element={<Hub />} />
        <Route path="/servicios/patologia" element={<PatologyDetail />} />
        <Route path="/servicios/:slug" element={<ServiceDetail />} />
        <Route path="/resultados" element={<Results />} />
        <Route path="/pathology" element={<Navigate to="/servicios/patologia" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
