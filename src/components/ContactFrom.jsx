import { useState } from "react";

const ContactForm = () => {
  const [messageDetail, setMessageDetail] = useState({
    name: "keshav",
    email: "keshavnagar887@gmail.com",
    message: "let's connect",
  });
  const handleInput = (e) => {
    const { name, value } = e.target;

    setMessageDetail((prev) => ({ ...prev, [name]: value }));
  };
  const handleForm = (e) => {
    e.preventDefault();
    console.log(messageDetail);
  };
  return (
    <>
      <form onSubmit={handleForm}>
        <label>
          Name:{" "}
          <input
            type="text"
            value={messageDetail.name}
            name="name"
            onChange={handleInput}
          />
        </label>
        <label>
          Email:{" "}
          <input
            type="email"
            value={messageDetail.email}
            name="email"
            onChange={handleInput}
          />
        </label>
        <label>
          Message:
          <textarea
            value={messageDetail.message}
            name="message"
            onChange={handleInput}
          ></textarea>
        </label>
        <button type="submit">send message</button>
      </form>
    </>
  );
};
export default ContactForm;
