import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchAllBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:8080/blogs");
        setBlogs(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBlogs();
  }, []);

  return (
    <>
      <h1>Changa blogs</h1>
      <div className="blogs">
        {blogs.map((blog) => {
          return (
            <div className="bl og" key={blog.id}>
              {blog.cover_image && (
                <img src={blog.cover_image} alt="cover-img" />
              )}
              <h2>{blog.title}</h2>
              <p>{blog.content}</p>
              <p>{blog.author}</p>
              <div className="buttons">
                <Link to={"/create_blog"}>
                  <button>add</button>
                </Link>
                <Link to={"/delete_blog"}>
                  <button>Delete</button>
                </Link>
                <button className="btn">Read now</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
