import {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { usePost as postRequest } from '../hooks/usePost';
import './styles/Form.css'

const FormPage = () => {
    const history = useHistory();

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [body, setBody] = useState('');
    const [imgUrl, setImgUrl] = useState('');

    const data = {"title": title, "author": author, "body": body, "imgUrl": imgUrl};
    const url = `http://localhost:4000/articles/`;

    const handleSubmit = (e) => {
        e.preventDefault();
        postRequest(url, data);
        history.push(`/success?name=${author}`);
    }

  return (
    <div>
        <form onSubmit={handleSubmit} method="post">
            <label htmlFor="title">Choose a title for your article:</label>
            <input type="text" name="title" id="title" onChange={(e) => setTitle(e.target.value)}/>
            <br />
            <label htmlFor="author">Put your name in here:</label>
            <input type="text" name="author" id="author" onChange={(e) => setAuthor(e.target.value)}/>
            <br />
            <label htmlFor="imgUrl">Image URL (optional):</label>
            <input type="url" name="imgUrl" id="imgUrl" onChange={(e) => setImgUrl(e.target.value)}/>
            <br />
            <label htmlFor="body">The content of your article goes in here:</label>
            <textarea name="body" id="body" cols="30" rows="10" onChange={(e) => setBody(e.target.value)}></textarea>
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default FormPage