import React from "react";

const Login = ({ isLoggedIn, onLogin }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login Form</h2>

      <input type="text" placeholder="Username" required />
      <br /><br />

      <input type="password" placeholder="Password" required />
      <br /><br />

      <button type="submit">Login</button>
    </form>
  );
};

export default Login;