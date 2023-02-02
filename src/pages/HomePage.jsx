import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import "./styles/Home.css";
export const HomePage = () => {
  const url = "http://localhost:4000/articles";

  const { data: articles, isPending: loading, error } = useFetch(url);

  const handleDelete = async(id) => {
    try {
      const options = {
          method: 'DELETE',
      }
      const response = await fetch(`${url}/${id}`, options);
      const data = await response.json();

      console.log(data);

      window.location.reload(true);
    } catch (error) {
        console.log(error.message);
    }
    
  }

  return (
    <div className="home">
      <h1>HomePage</h1>
      {loading && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      {articles?.map((article) => (
        <div key={article.id} className="card">
          <h2>{article.title}</h2>
          <p>{article.author}</p>
          <Link to={`/articles/${article.id}`}>Read more...</Link>
          <button className="deleteBtn" onClick={() => handleDelete(article.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};
