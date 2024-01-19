import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './components/home_component';
import LoginPage from './components/login_component';
import RegisterPage from './components/register_component';
import ThingsPage from './components/things_component';
import ThingPage from './components/thing_component';
import TmdPage from './components/tmd_component';
import NotSupportPage from './components/notsupport_component';
import { AuthProvider } from "./components/auth"
import ProtectedRoute from "./components/protectedroute";
import RedirectIfAuthenticated from './components/redirectifauthenticated';

function App() {

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={
            <RedirectIfAuthenticated>
              <LoginPage />
            </RedirectIfAuthenticated>
          } />
          <Route path="/register" element={
            <RedirectIfAuthenticated>
              <RegisterPage />
            </RedirectIfAuthenticated>
          } />
          <Route path="/things" element={<ThingsPage />} />
          <Route path="/things/:_id" element={<ThingPage />} />
          <Route path="/tmd" element={<TmdPage />} />
          <Route path="*" element={<NotSupportPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
