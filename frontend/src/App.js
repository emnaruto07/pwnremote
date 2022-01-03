import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,

} from "react-router-dom";
import JobList from "./components/JobList";
import JobDetail from "./components/JobDetail";
import JobCreate from "./components/JobCreate";
import { AuthContext, AuthContextProvider } from './contexts/AuthContext'
import Login from './components/Login'
import ConfirmEmail from "./components/ConfirmEmail";
import Navbar from "./components/Navbar";
import JobUpdate from "./components/JobUpdate";
import JobDelete from "./components/JobDelete";
import Signup from "./components/Signup";

function PrivateRoute({ children }){
  const { user } = useContext(AuthContext)
  return user ? children : <Navigate replace to="/login"/>
}

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
                  <Route path="/create-job" element={<PrivateRoute><JobCreate /></PrivateRoute>} exact />
                  <Route path="/login" element={<Login />} exact />
                  <Route path="/signup" element={<Signup />} exact />
                  <Route path="/accounts/confirm-email/:key" element={<ConfirmEmail />} exact />
                  <Route path="/jobs/:id" element={<JobDetail />} exact/>
                  <Route path="/jobs/:id/update" element={<PrivateRoute><JobUpdate /></PrivateRoute>} />
                  <Route path="/jobs/:id/delete" element={<PrivateRoute><JobDelete /></PrivateRoute>} />
                  <Route path="/" element={<JobList />} exact />
                </Routes>
              </div> 
        </div>
      </AuthContextProvider>
    </Router>
  );
}
