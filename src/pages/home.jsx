import React, { useContext, useRef } from "react";
import { AuthContext as authContext } from "../context/authContext";
import Button from "../components/Button";

const HomePage = () => {
  const usernameInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const { login } = useContext(authContext);

  const loginWithUsernameAndPassword = (e) => {
    e.preventDefault();

    login(usernameInputRef.current.value, passwordInputRef.current.value);
  };

  return (
    <div className="wrapper">
      <div>
        <h2>Login</h2>
        <div className="login">
          <form onSubmit={loginWithUsernameAndPassword}>
            <div>
              <input
                type="text"
                ref={usernameInputRef}
                required
                autoFocus
                placeholder="Username"
              />
            </div>
            <div>
              <input
                type="password"
                ref={passwordInputRef}
                required
                placeholder="Password"
              />
            </div>
            <div>
              <Button isPrimary type="submit">
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
