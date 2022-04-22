import React, { useState } from "react";
import ClassCounter from "./component/ClassCounter";
import PostItem from "./component/PostItem";
import './styles/App.css'

function App() {
  const [value, setValue] = useState('Text')

  
  return (
    <div className="App">
      <PostItem post={{id: 1, title: 'Javascript', body: 'Description'}}/>
    </div>
  );
}

export default App;
