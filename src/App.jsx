import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const OnchangeValue = (e) => {
    const val = e.target.value;

    if (e.target.name === "email") {
      setEmail(val);
    } else if (e.target.name === "password") {
      setPassword(val);
    }
  };

  const OnHandleSubmit = (e) => {
    console.log("hello");
  };

  return (
    <>
      <form onSubmit={OnHandleSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={OnchangeValue}
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={OnchangeValue}
          />
        </label>
      </form>
    </>
  );
}

export default App;
