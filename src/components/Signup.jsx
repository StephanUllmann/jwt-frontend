import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BASE_URL = 'https://jwt-backend-8pow.onrender.com';

const Signup = ({ setUser }) => {
  const [formValues, setFormValues] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInput = (e) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError(null);
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/users/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formValues),
      });

      const data = await response.json();
      localStorage.setItem('token', data.token);
      setUser(true);
      navigate('/posts');

      console.log(data);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <label htmlFor='username'>Username</label>
      <input type='text' name='username' id='username' value={formValues.username} onChange={handleInput} />
      <br />
      <label htmlFor='password'>Password</label>
      <input type='password' name='password' id='password' value={formValues.password} onChange={handleInput} /> <br />
      <button disabled={loading}>Signup</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default Signup;
