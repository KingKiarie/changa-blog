import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { Link } from "react-router-dom";

export default function App() {
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

  const handleUpdate = async (id) => {
    try {
      await axios.put("http://localhost:8080/blogs/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8080/blogs/" + id);
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  }; // Add this closing curly brace

  return (
    <>
      <body>
        <div className="content">
          <div className="header">
            <h1>Changa blogs</h1>
          </div>
          <div className="blogs">
            {blogs.map((blog) => {
              return (
                <div className="blog" key={blog.id}>
                  <div className="imagecard">
                    {blog.cover_image && (
                      <img src={blog.cover_image} alt="cover-img" />
                    )}
                  </div>

                  <h2>{blog.title}</h2>
                  <p>{blog.content}</p>
                  <h3>Author:{blog.author}</h3>
                  <div className="button-card">
                    <span></span>

                    <button
                      className="btn"
                      onClick={() => {
                        handleUpdate;
                      }}
                    >
                      <Link to={`/update/${blog.id}`}>Update blog</Link>
                    </button>

                    <button
                      className="btn"
                      onClick={() => handleDelete(blog.id)}
                    >
                      Delete Blog
                    </button>
                    <button className="btn">Read now</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </body>
    </>
  );
}
