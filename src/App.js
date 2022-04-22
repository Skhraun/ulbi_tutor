import React, { useState } from "react";
import ClassCounter from "./component/ClassCounter";
import PostItem from "./component/PostItem";
import PostList from "./component/PostList";
import './styles/App.css'

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript 1', body: 'Description'},
    {id: 2, title: 'Javascript 2', body: 'Description'},
    {id: 3, title: 'Javascript 3', body: 'Description'}
  ])


  return (
    <div className="App">
      <form>
        <input type="text" placeholder="Name of post"/>
        <input type="text" placeholder="Description of post"/>
        <button>Create post</button>
      </form>
      <PostList posts={posts} title="List of posts(1)"/>
    </div>
  );
}

export default App;

//time 42:40
