import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

// const BASE_URL = 'https://jwt-backend-8pow.onrender.com';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [formValues, setFormValues] = useState({ title: '', body: '' });

  const { BASE_URL } = useContext(AuthContext);
  // console.log(BASE_URL);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(`${BASE_URL}/posts`);
        const data = await res.json();

        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, []);

  const handleInput = (e) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${BASE_URL}/posts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(formValues),
      });

      const data = await response.json();

      setPosts(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {posts.length > 0 &&
        posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      <form onSubmit={handleSubmit}>
        <h2>New Post</h2>
        <label htmlFor='title'>title</label>
        <input type='text' name='title' id='title' value={formValues.title} onChange={handleInput} />
        <br />
        <label htmlFor='Text'>Text</label>
        <input type='Text' name='body' id='body' value={formValues.body} onChange={handleInput} /> <br />
        <button disabled={loading}>Submit</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Posts;
