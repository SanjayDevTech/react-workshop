import "./App.css";
import Fruits from "./Fruits";
import Login from "./Login";
import { useState } from "react";

function App() {
  const [isLoginPage, setLoginPage] = useState(true);
  if (isLoginPage) {
    return <Login setLoginPage={setLoginPage} />
  }
  return (<div>
    <header className="app-header">Header</header>
    <Fruits />
  </div>);
}





export default App;