import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import JobList from "./components/JobList";
import JobDetail from "./components/JobDetail";
import JobCreate from "./components/JobCreate";
import { AuthContextProvider } from './contexts/AuthContext'
import Login from './components/Login'
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Router>
      <AuthContextProvider>
        <div>
          <Navbar />

          {/* A <Router> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Routes>
            <Route path="/create-job" element={<JobCreate />} exact />
            <Route path="/login" element={<Login />} exact />
            <Route path="/job/:id" element={<JobDetail />} />
            <Route path="/" element={<JobList />} exact />
          </Routes>
        </div>
      </AuthContextProvider>
    </Router>
  );
}
