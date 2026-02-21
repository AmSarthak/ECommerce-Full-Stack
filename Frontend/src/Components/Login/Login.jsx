import React, { useState } from 'react';

const LoginComponent = ({Login}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    Login(email , password)
  };

  return (
    <div className="login-container">
      <div className="login-card">
        
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input 
              type="text" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className={email ? 'shrink' : ''}>Email Address</label>
            <span className="bar"></span>
          </div>

          <div className="input-group">
            <input 
              type="password" 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className={password ? 'shrink' : ''}>Password</label>
            <span className="bar"></span>
          </div>

          <button type="submit" className="material-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;