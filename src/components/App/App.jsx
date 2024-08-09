import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
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
              <NavLink 
                to="/contacts" 
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Contacts
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/planner" 
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Planner
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="content">
          <TransitionGroup>
            <CSSTransition
              timeout={300}
              classNames="page"
              key={window.location.pathname} 
            >
              <Routes>
                <Route path="/contacts" element={<ContactsPage />} />
                <Route path="/planner" element={<PlannerPage />} />
                <Route path="/" element={<ContactsPage />} /> 
              </Routes>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </div>
    </Router>
  );
};

export default App;