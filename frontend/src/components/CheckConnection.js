import React, { useEffect, useState } from "react";

const CheckConnection = () => {
  const [status, setStatus] = useState("Checking...");
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/api/status")
      .then((res) => res.json())
      .then((data) => {
        if (data.dbStatus === "connected") {
          setStatus("🎉 Setup Complete 🎉\nDatabase Connected ✅");
          setIsConnected(true);
        } else {
          setStatus("❌ Setup Failed! ❌ \nDatabase Not Connected.");
          setIsConnected(false);
        }
      })
      .catch(() => {
        setStatus("❌ Setup Failed! ❌");
        setIsConnected(false);
      });
  }, []);

  return (
    <div style={{
      textAlign: "center",
      fontFamily: "Bahnschrift",
      backgroundColor: "#000",
      color: "#fff",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}>
      {isConnected ? (
        <>
          <h2 style={{ fontSize: "2.5em", color: "white" }}>🎉 Setup Complete 🎉</h2>
          <p style={{ fontSize: "1.2em", marginTop: "10px", color: "#8bc34a" }}>Database Connected ✅</p>
        </>
      ) : (
        <>
          <h2 style={{ fontSize: "2.5em", color: "white" }}>⚙️ Setup Failed ⚙️</h2>
          <p style={{ fontSize: "1.2em", marginTop: "10px", color: "#ff5252" }}>Database not connected ❌</p>
        </>
      )}
      <footer style={{ marginTop: "40px", fontSize: "0.9em", color: "#bbb" }}>
        Developed by Nithyasarathi M
      </footer>
    </div>
  );
};

export default CheckConnection;
