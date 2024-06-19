import { useContext } from 'react';
import Login from './components/Login';
// import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Signup from './components/Signup';
import Posts from './components/Posts';
import { AuthContext } from './context/AuthContext';
import Header from './components/Header';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const { user } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);

  return (
    <div
      data-theme={theme}
      className='min-h-screen grid place-content-center bg-turtle-green-100 text-cocoa-bean-900 dark:bg-turtle-green-950 dark:text-cocoa-bean-100'
    >
      <Header />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/posts' element={user ? <Posts /> : <Navigate to='/login' />} />
      </Routes>
    </div>
  );
}

export default App;
