import React from "react";

const RegisterForm = () => {
  return (
    <form className="login-form">
      <div>
        <label for="fname">First Name</label>
        <input type="text" name="fname" id="fname" />
      </div>

      <div>
        <label for="lname">Last Name</label>
        <input type="text" name="lname" id="lname" />
      </div>

      <div>
        <label for="email">Email Address</label>
        <input type="email" name="email" id="email" />
      </div>

      <div>
        <label for="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>

      <button type="submit" className="btn-primary w-full mt-4">
        Create account
      </button>
    </form>
  );
};
export default RegisterForm;
