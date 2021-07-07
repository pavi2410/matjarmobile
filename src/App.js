import {useState} from "react";
import './css/materialize.css';
import './css/style.css';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Footer, Navbar, Sidebar} from "./components";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

// import './css/owl.carousel.css';
// import './css/owl.theme.css';
// import './css/owl.transitions.css';
// import './css/fakeLoader.css';
// import './css/magnific-popup.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <Navbar setSidebarOpen={setSidebarOpen}/>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/cart" exact component={Cart}/>
      </Switch>
      <div id="fakeLoader"/>
      <Footer/>
    </Router>
  );
}

export default App;
