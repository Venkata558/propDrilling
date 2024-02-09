import React, { useState } from "react";
import CompB from "./CompB.jsx";

function CompA() {
  
  const [user, setUser] = useState("React");
  return (
    <div className="box">
      <h1>Component A </h1>
      <h2>{`Hello, ${user}`}</h2>
      <CompB user={user}/>
    </div>
  );
}
export default CompA;
