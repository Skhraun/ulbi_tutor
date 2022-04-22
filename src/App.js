import React, { useState } from "react";
import Counter from "./component/Counter";

function App() {
  const [value, setValue] = useState('Text')

  
  return (
    <div className="App">
      <Counter/>
    </div>
  );
}

export default App;
