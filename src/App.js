import React from "react";
import "./App.css";
import Homepage from "./Components/Home/Home";
import About from "./Components/About/About";
import Navbar from "./Components/Navbar/Navbar";
// import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import Recipe from "./Components/Recipee/Recipe"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/recipe/:id" component={Recipe} />
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
