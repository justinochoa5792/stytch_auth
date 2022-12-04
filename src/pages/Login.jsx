import React from "react";

const Login = () => {
  return (
    <div>
      <input placeholder="Email..." />
      <input placeholder="Password..." />

      <button> Login</button>

      <div>
        <p> Forgot your password? </p>
        <button> Reset Password</button>
      </div>
    </div>
  );
};

export default Login;
