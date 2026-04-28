import React from "react";

const Login = ({ onLogin }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Parent Component</h1>

      <label>Username: </label>
      <input type="text" placeholder="Name" required />

      <br />
      <br />

      <label>Password: </label>
      <input type="password" required />

      <br />
      <br />

      <button type="submit">Login</button>
    </form>
  );
};

export default Login;