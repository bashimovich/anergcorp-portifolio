import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Spin } from 'antd';
import './main.css'


const Home = lazy(() => import('./Pages/Home'));
const Resume = lazy(() => import('./Pages/Resume'));

function App() {
  return (
    <Router>
      <div>
        <Suspense fallback={<div className="suspense-fallback-container"><Spin size="large" /></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
