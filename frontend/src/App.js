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
import JobUpdate from "./components/JobUpdate";
import JobDelete from "./components/JobDelete";

export default function App() {
  return (
    <Router>
      <AuthContextProvider>
        <div>
          <Navbar />

          {/* A <Router> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
              <div className='max-w-6xl mx-auto py-5 px-4'>
                <Routes>
                  <Route path="/create-job" element={<JobCreate />} exact />
                  <Route path="/login" element={<Login />} exact />
                  <Route path="/jobs/:id" element={<JobDetail exact />} />
                  <Route path="/jobs/:id/update" element={<JobUpdate />} />
                  <Route path="/jobs/:id/delete" element={<JobDelete />} />
                  <Route path="/" element={<JobList />} exact />
                </Routes>
              </div> 
        </div>
      </AuthContextProvider>
    </Router>
  );
}
