import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [serverMessage, setServerMessage] = useState("Connecting...");

  useEffect(() => {
    axios.get("http://localhost:5000/api/ping")
      .then(res => setServerMessage(res.data.message))
      .catch(() => setServerMessage("Failed to connect to server"));
  }, []);

  return (
    <div style={{ fontFamily: "sans-serif", textAlign: "center", marginTop: "50px" }}>
      <h2>{serverMessage}</h2>
    </div>
  );
}

export default App;
