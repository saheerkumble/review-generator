
// client/src/components/LoginButton.js
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase-config";
import { useNavigate } from "react-router-dom";

function LoginButton() {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const token = await result.user.getIdToken();

      // Store token locally (can be used for backend auth)
      localStorage.setItem("authToken", token);
      localStorage.setItem("user", JSON.stringify(result.user));

      navigate("/categories");
    } catch (error) {
      console.error("Login failed:", error);
      alert("Google login failed. Please try again.");
    }
  };

  return (
    <button
      onClick={handleLogin}
      style={{
        backgroundColor: "#4285F4",
        color: "white",
        border: "none",
        padding: "10px 20px",
        borderRadius: "5px",
        fontSize: "16px",
        cursor: "pointer",
      }}
    >
      Sign in with Google
    </button>
  );
}

export default LoginButton;

/*
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase-config";
import { signInWithRedirect, getRedirectResult } from "firebase/auth";

function LoginButton() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getRedirectResult(auth)
      .then(async (result) => {
        if (result && result.user) {
          const token = await result.user.getIdToken();
          localStorage.setItem("authToken", token);
          localStorage.setItem("user", JSON.stringify(result.user));
          navigate("/categories");
        }
      })
      .catch((error) => {
        console.error("Google redirect sign-in failed:", error);
        alert("Google login failed. Please try again.");
      })
      .finally(() => setLoading(false));
  }, [navigate]);

  const handleLogin = async () => {
    try {
      setLoading(true);
      await signInWithRedirect(auth, provider);
    } catch (error) {
      console.error("Google redirect login failed:", error);
      alert("Google login failed. Please try again.");
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleLogin}
      disabled={loading}
      style={{
        backgroundColor: "#4285F4",
        color: "white",
        border: "none",
        padding: "10px 20px",
        borderRadius: "5px",
        fontSize: "16px",
        cursor: loading ? "not-allowed" : "pointer",
        opacity: loading ? 0.7 : 1,
      }}
    >
      {loading ? "Signing in..." : "Sign in with Google"}
    </button>
  );
}

export default LoginButton;
*/