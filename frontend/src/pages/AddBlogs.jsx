import React, { useState } from "react";

const AddBlogs = () => {
  const [blog, setBlogs] = useState({
    title: "",
    cover_image: "",
    content: "",
    author: "",
  });

  const handleChange = (e) => {
    setBlogs({ ...blog, [e.target.name]: e.target.value });
  };

  console.log(blog);
  return (
    <>
      <h1>Add new Blog</h1>
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
    </>
  );
};

export default AddBlogs;
