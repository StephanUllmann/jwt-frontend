import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext';
import Button from './Button';

const Header = () => {
  const { user, handleLogout } = useContext(AuthContext);
  const { theme, themeToggle } = useContext(ThemeContext);

  return (
    <header className='flex gap-7 bg-re'>
      {' '}
      <nav>
        {!user ? (
          <>
            <Link to='/login'>Login</Link>
            {'  |  '}
            <Link to='/signup'>Signup</Link>
          </>
        ) : (
          <button onClick={handleLogout}>Logout</button>
        )}
        {'  |  '}
        <Link to='/posts'>Posts</Link>
      </nav>
      <Button onClick={themeToggle}>{theme === 'light' ? 'dark' : 'light'}</Button>
    </header>
  );
};

export default Header;
