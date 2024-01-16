import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useParams } from 'react-router-dom';
import HomePage from './components/home_component';
import LoginPage from './components/login_component';
import RegisterPage from './components/register_component';
import { ThingsPage, ThingPage } from './components/things_component';
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
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/things" element={<ThingsPage />}>
            <Route path=":_id" element={<ThingPage />} />
          </Route>
          <Route path="/tmd" element={<TmdPage />} />
          <Route path="*" element={<NotSupportPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
