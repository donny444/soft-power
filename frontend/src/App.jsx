import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './components/home_component'
import { AuthProvider } from "./components/auth"
import ProtectedRoute from "./components/protectedroute";
import RedirectIfAuthenticated from './components/redirectifauthenticated';

function App() {

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
