import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("Keshav");
  const [email, setEmail] = useState("keshavnagar887@gmail.com");
  const [message, setMessage] = useState("hello lets connect");
  const handleInput = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "message":
        setMessage(value);
        break;
      default:
        console.log("wrong choice");
    }
  };
  const handleForm = (e) => {
    e.preventDefault();
    const user = {
      name,
      email,
      message,
    };
    console.log(user);
  };
  return (
    <>
      <form onSubmit={handleForm}>
        <label>
          Name:{" "}
          <input type="text" value={name} name="name" onChange={handleInput} />
        </label>
        <label>
          Email:{" "}
          <input
            type="email"
            value={email}
            name="email"
            onChange={handleInput}
          />
        </label>
        <label>
          Message:{" "}
          <input
            type="text"
            value={message}
            name="message"
            onChange={handleInput}
          />
        </label>
        <button type="submit">send message</button>
      </form>
    </>
  );
};
export default ContactForm;
