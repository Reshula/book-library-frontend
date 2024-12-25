import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Login.css";  // Добавляем новый файл для стилей

const Login = () => {
  console.log("Rendering Login component...");

  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  console.log("Auth0 state:", { isAuthenticated, user });

  return (
    <div className="login-container">
      {!isAuthenticated ? (
        <button className="login-button" onClick={() => loginWithRedirect()}>
          Log In
        </button>
      ) : (
        <div className="logged-in-container">
          <p className="welcome-text">Welcome, {user.name}</p>
          <button
            className="logout-button"
            onClick={() => logout({ returnTo: window.location.origin })}
          >
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
