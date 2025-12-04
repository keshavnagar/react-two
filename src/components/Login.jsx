import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("Sushil");
  const [password, setPassword] = useState("09876");
  const handleInput = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "username":
        setUsername(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };
  const handleForm = (e) => {
    e.preventDefault();
    const user = { username, password };
    console.log(user);
  };

  return (
    <>
      <form onSubmit={handleForm}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleInput}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleInput}
          />
        </label>
        <button type="submit">signe in</button>
      </form>
    </>
  );
};
export default Login;
