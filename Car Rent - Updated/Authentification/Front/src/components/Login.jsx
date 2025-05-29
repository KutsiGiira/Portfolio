import { Link } from 'react-router-dom'
import { useState } from 'react'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [Auth, SetAuth] = useState({
    password: '',
    username: ''
  })
  const validateForm = () => {
    const newErrors = {}
    if (!username.trim()) {
      newErrors.username = 'Username is required'
    }
    if (!password.trim()) {
      newErrors.password = 'Password is required'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

const handleSubmit = async (e) => {
  e.preventDefault();

  if (validateForm()) {
    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        setErrors({ auth: errorText || 'Login failed' });
        return;
      }

      const data = await response.text(); // or use .json() if server returns JSON
      alert(data);
      // Optionally redirect or save token here

      // Clear form only after successful login
      setUsername('');
      setPassword('');
      setErrors({});
    } catch (err) {
      setErrors({ auth: err.message });
    }
  }
};


  return (
  <div className="bg-white w-screen h-screen flex items-center justify-center">
    <form onSubmit={handleSubmit} className="bg-white p-20 rounded-2xl w-full max-w-md shadow-2xl">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Please Login</h2>
      {errors.auth && (
        <div className="mb-4 p-2 bg-red-100 rounded text-center text-red-500 font-medium">
          {errors.auth}
        </div>
      )}

      <div className="mb-4 text-left">
        <label htmlFor="username" className="block mb-2 text-gray-800 font-medium">
          Username
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={`w-full p-2 border rounded text-base ${
            errors.username ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.username && (
          <span className="text-red-500 text-sm mt-1 block">{errors.username}</span>
        )}
      </div>

      <div className="mb-4 text-left">
        <label htmlFor="password" className="block mb-2 text-gray-800 font-medium">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={`w-full p-2 border rounded text-base ${
            errors.password ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.password && (
          <span className="text-red-500 text-sm mt-1 block">{errors.password}</span>
        )}
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-indigo-500 text-white rounded text-base font-medium hover:bg-indigo-600 transition duration-200 mb-3"
      >
        Login
      </button>

      <Link
        to="/change-password"
        className="block text-indigo-500 hover:underline mt-2 text-center"
      >
        Change Password
      </Link>
    </form>
  </div>
);
}

export default Login