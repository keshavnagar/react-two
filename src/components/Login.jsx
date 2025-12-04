import { useState } from "react";
const Login = () => {
  const [user, setUser] = useState({ username: "rahul", password: "23@rahul" });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };
  const handleForm = (e) => {
    e.preventDefault();
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
            value={user.username}
            onChange={handleInput}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleInput}
          />
        </label>
        <button type="submit">signe in</button>
      </form>
    </>
  );
};
export default Login;
