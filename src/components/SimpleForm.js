import React, { useState } from "react";

const SimpleForm = () => {
  let [name, setName] = useState("");

  console.log("name from usestate", name);

  function manageName(event) {
    console.log("ur typed input", event.target.value);
    setName(event.target.value);
  }

  return (
    <div>
      <p>Enter your name:</p>
      <input
        type="text"
        placeholder="Enter Your Name"
        onChange={manageName}
        value={name}
      />
      {name && <h1>Hello {name}!</h1>}
    </div>
  );
};

export default SimpleForm;
