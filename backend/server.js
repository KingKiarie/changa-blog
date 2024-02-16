import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Salazar!21",
  database: "changa",
  port: 3306,
});

const Port = 8080;

app.get("/", (req, res) => {
  return res.json("Hello this is the backend server");
});

app.get("/blogs", (req, res) => {
  const blog = "SELECT * FROM blog_posts";
  db.query(blog, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/create_blogs", (req, res) => {
  const query =
    "INSERT INTO blog_posts (`title`, `content`,`author`)VALUES(?,?,?)";
  const values = [req.body.title, req.body.content, req.body.author];

  db.query(query, values, (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "failed to create blog", err });
    }
    return res
      .status(201)
      .json({ message: "blog has been created successfully" });
  });
});


app.delete("/blogs/:id",(req,res)=>{
  const blogId = req.params.id;

  const q = "DELETE FROM blog_posts WHERE id = ? "

  db.query(q,blogId,(err,data)=>{
    if(err) return res.json(err)
    return res.json("blog has been deleted", data)
  })

})

app.put("add/:id",(req,res)=>{
  
})

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
