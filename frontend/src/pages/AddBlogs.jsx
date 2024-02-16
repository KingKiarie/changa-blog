import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AddBlogs = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(blog);
    try {
      await axios.post("http://localhost:8080/create_blogs", blog);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  
  return (
    <>
      <h1>Add new Blog</h1>
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
        <button onClick={handleSubmit}>Add</button>
      </div>
    </>
  );
};

export default AddBlogs;
