import React from "react";

const Signup = () => {
  return (
    <div className="signup-container">
      <h2 className="signup_title">Sign up</h2>
      Name<br></br>
      <input
        className="signup_name"
        id="name"
        type="text"
        placeholder="이름"
      ></input>
      <br></br>

      Email<br></br>
      <input
        className="signup_email"
        id="email"
        type="email"
        placeholder="abc@def.com"
      ></input>
      <br></br>

      Password<br></br>
      <input
        className="signup_password"
        id="password"
        type="password"
        placeholder="비밀번호"
      ></input>
      <br></br>

      Confirm Password<br></br>
      <input
        className="signup_confirmpassword"
        id="confirm_password"
        type="password"
        placeholder="비밀번호 확인"
      ></input>
      <br></br>
      
      <button className="signup_button">Sign Up</button>
    </div>
  );
};

export default Signup;
