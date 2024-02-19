import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
const updateBlogs = () => {
  const [blog, setBlogs] = useState({
    title: "",
    cover_image: "",
    content: "",
    author: "",
  });

  const navigate = useNavigate();
  const location = useLocation();

  const blog_id = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setBlogs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(blog);
  console.log(location.pathname.split("/")[2]);

  const handleSubmit = async (e, id) => {
    e.preventDefault();

    console.log(blog);
    try {
      await axios.put("http://localhost:8080/blog" + blog_id, blog);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <h1>Update Blog </h1>
      <div className="form">
        <input
          type="text"
          placeholder="title"
          onChange={handleChange}
          name="title"
        />
        <input
          type="file"
          placeholder="cover_image"
          onChange={handleChange}
          accept="image/*"
          name="cover_image"
        />
        <textarea
          type="text"
          placeholder="content"
          onChange={handleChange}
          name="content"
          rows={6}
        />
        <input
          type="text"
          placeholder="author"
          onChange={handleChange}
          name="author"
        />
        <button onClick={handleSubmit}>Update Blog</button>
      </div>
    </>
  );
};

export default updateBlogs;
