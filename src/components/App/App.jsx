// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ContactsPage from '../ContactsPage/ContactsPage';
import PlannerPage from '../PlannerPage/PlannerPage';
import './App.module.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <nav>
          <ul>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
            <li>
              <Link to="/planner">Planner</Link>
            </li>
          </ul>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/planner" element={<PlannerPage />} />
            <Route path="/" element={<ContactsPage />} /> {/* Redirect to contacts by default */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
