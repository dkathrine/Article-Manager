import { useHistory } from "react-router-dom";
import { useState } from "react";
import { usePost as postRequest } from "../hooks/usePost";
import './styles/Form.css';

const ContactPage = () => {

  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  const url = "http://localhost:4000/contact/";
  
  const data = {
    "name": name,
    "email": email,
    "message": message
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postRequest(url, data);
    history.push(`/success?name=${name}`);
}


  return (
    <div>
      <h1>Please Contact us</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur enim
        ipsam asperiores autem reprehenderit velit assumenda aliquam ex vero
        iure?
      </p>
      <form onSubmit={handleSubmit} method="post">
        <label htmlFor="name">What's your name?</label>
        <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)}/>
        <label htmlFor="email">Your Email:</label>
        <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}/>
        <label htmlFor="message">What do you have to say?</label>
        <textarea name="message" id="message" cols="30" rows="5" onChange={(e) => setMessage(e.target.value)}></textarea>
        <input type="submit" value="Submit" />
        </form>
    </div>
  );
};

export default ContactPage;
