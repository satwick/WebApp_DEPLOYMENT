import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../components/Home';
import Counter from '../components/reduxExamples/counter';

function AppRouter() {
  return (
    <Router basename={'/trexui'}>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/home" element={<Home />} />
        <Route path="/reduxExamples" element={<Counter />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
