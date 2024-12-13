import React, { useEffect, useState } from "react";
import "./About.css";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from the API
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="about-main-div">
      <h2 className="about-heading">This is About Us Page</h2>
<h3 className="about-heading">Data Fetching from backend API and displaying in browser</h3>

      <ul className="post-list">
        {posts.slice(0, 12).map((post) => (
          <li key={post.id} className="post">
            <p> <b>Id :</b> {post.id}</p>
            <p><b>Title :</b> {post.title}</p>
            <p><b>Body :</b> {post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
