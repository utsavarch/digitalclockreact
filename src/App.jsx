import { useState } from "react";
import Watch from "./component/Watch.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Watch />
    </>
  );
}

export default App;
