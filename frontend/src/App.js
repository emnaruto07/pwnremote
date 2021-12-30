import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import JobList from "./components/JobList";
import JobDetail from "./components/JobDetail";
import JobCreate from "./components/JobCreate";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/create-job">Post a Job</Link>
            </li>
          </ul>
        </nav>

        {/* A <Router> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/create-job" element={<JobCreate />} exact />
          <Route path="/job/:id" element={<JobDetail />} />
          <Route path="/" element={<JobList />} exact />
        </Routes>
      </div>
    </Router>
  );
}
