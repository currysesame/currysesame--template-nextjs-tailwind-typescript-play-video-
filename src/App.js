import React from "react";
import Canvas from "./components/Canvas"; // Change the path according to the directory structure of your project


var MyObject = {
  draw: function() 
  {
    window.context.font = "17px Arial";
    if (typeof window.framearray === 'undefined' || window.framearray.length == 0)
      { return }
  }
}


function App() {
  return <Canvas draw={MyObject.draw} height={500} width={500} />;
}

export default App;