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

      navigate("/category");
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
