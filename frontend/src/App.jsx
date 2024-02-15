import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchAllBlogs = async () => {
      try {
        const res = await axios.get("http:localhost:8080/blogs");
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
  }, []);

  return (
    <>
      <h1>Hello world</h1>
    </>
  );
}

export default App;
