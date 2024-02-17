import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const updateBlogs = () => {
  const [blog, setBlogs] = useState({
    title: "",
    cover_image: "",
    content: "",
    author: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBlogs({ ...blog, [e.target.name]: e.target.value });
  };

  console.log(blog);

  const handleSubmit = async (e,id) => {
    e.preventDefault();

    console.log(blog);
    try {
      await axios.put("http://localhost:8080/blog" + id);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1>Update Blog</h1>
      <div className="form">
        <input
          type="text"
          placeholder="title"
          onChange={handleChange}
          name="title"
        />
        <input
          type="text"
          placeholder="cover_image"
          onChange={handleChange}
          name="cover_image"
        />
        <input
          type="text"
          placeholder="content"
          onChange={handleChange}
          name="content"
        />
        <input
          type="text"
          placeholder="author"
          onChange={handleChange}
          name="author"
        />
        <button onClick={handleSubmit}>Update</button>
      </div>
    </>
  );
};

export default updateBlogs;
