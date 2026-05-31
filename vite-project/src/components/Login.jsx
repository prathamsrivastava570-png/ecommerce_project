import React, { useState } from 'react';
import './Login.css';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // You can change these credentials to anything you want
  const VALID_EMAIL = 'test@amazon.com';
  const VALID_PASSWORD = 'amazon123';

  const handleLogin = () => {
    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      onLogin();
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h1 className="login-logo">amazon</h1>
        <h2>Sign In</h2>

        <div className="login-field">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
          />
        </div>

        <div className="login-field">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
          />
        </div>

        {error && <p className="login-error">{error}</p>}

        <button className="login-btn" onClick={handleLogin}>
          Sign In
        </button>

        <p className="login-hint">
          Demo credentials:<br />
          📧 test@amazon.com<br />
          🔑 amazon123
        </p>
      </div>
    </div>
  );
}

export default Login;