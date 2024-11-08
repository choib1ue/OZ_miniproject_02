import React from "react";

const Login = () => {
  return (
    <div className="login-container">
      <h2 className="login_title">Login</h2>

      Email<br></br>
      <input
        className="login_email"
        id="email"
        type="email"
        placeholder="abc@def.com"
      ></input>
      <br></br>

      Password<br></br>
      <input
        className="login_password"
        id="password"
        type="password"
        placeholder="비밀번호"
      ></input>
      <br></br>
      
      <button className="login_button">Login</button>
    </div>
  );
};

export default Login;
