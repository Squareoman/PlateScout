import { Routes, Route } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import HomePage from '../../pages/HomePage';
import LoginForm from '../../forms/LoginForm';
import SignupForm from '../../forms/SignupForm';
import Profile from '../../pages/Profile';
import PageNotFound from '../../pages/PageNotFound';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
