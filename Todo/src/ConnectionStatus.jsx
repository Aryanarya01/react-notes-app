import React from "react";

const ConnectionStatus = () => {
  return (
    <div>
      <p
        style={{
          color: "gray",
          marginLeft: "9rem",
          marginTop: "1.5rem",
          fontSize: "0.9rem",
          fontWeight: "500",
        }}
      >
        Connected: <span className="connectedStatus">02448968991386775921</span>
      </p>
      <hr style={{ border: "2px solid #FF00FF",color:"#ff00ff" }} />
    </div>
  );
};

export default ConnectionStatus;
