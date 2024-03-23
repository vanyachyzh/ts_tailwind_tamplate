import { Route, Routes } from 'react-router-dom';

import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import SecondPage from './pages/SecondPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/second" element={<SecondPage />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
