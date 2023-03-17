import "./App.css";
import { Navbar } from "./components";
import { Footer, Main } from "./containers";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Main />
        <Footer />
      </Router>
    </>
  );
}

export default App;
