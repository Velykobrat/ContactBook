import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
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
              <Link to="/contacts">Contacts</Link>
            </li>
            <li>
              <Link to="/planner">Planner</Link>
            </li>
          </ul>
        </nav>

        <div className="content">
          <TransitionGroup>
            <CSSTransition
              timeout={300}
              classNames="page"
              key={window.location.pathname} // Служить для зміни ключа при зміні URL
            >
              <Routes>
                <Route path="/contacts" element={<ContactsPage />} />
                <Route path="/planner" element={<PlannerPage />} />
                <Route path="/" element={<ContactsPage />} /> {/* Redirect to contacts by default */}
              </Routes>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </div>
    </Router>
  );
};

export default App;
