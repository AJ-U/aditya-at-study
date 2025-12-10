import { Fragment, useState } from "react";
import "./App.css";
import Header from "./pages/Header/Header";
import Home from "./pages/Home/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Fragment>
      <Header />
      <Home />
    </Fragment>
  );
}

export default App;
