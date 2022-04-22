import React, { useState } from "react";
import ClassCounter from "./component/ClassCounter";

function App() {
  const [value, setValue] = useState('Text')

  
  return (
    <div className="App">
      <ClassCounter/>
    </div>
  );
}

export default App;
