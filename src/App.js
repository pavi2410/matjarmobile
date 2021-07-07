import {useState} from "react";
import './css/materialize.css';
import './css/style.css';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Footer, Navbar, Sidebar} from "./components";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Checkout from "./pages/Checkout";
import Error404 from "./pages/Error404";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Testimonial from "./pages/Testimonial";
import ShopSingle from "./pages/ShopSingle";
import Product from "./pages/Product";

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
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/register" exact component={Register}/>
        <Route path="/cart" exact component={Cart}/>
        <Route path="/product" exact component={Product}/>
        <Route path="/checkout" exact component={Checkout}/>
        <Route path="/blog" exact component={Blog}/>
        <Route path="/about-us" exact component={About}/>
        <Route path="/contact" exact component={Contact}/>
        <Route path="/testimonial" exact component={Testimonial}/>
        <Route path="/shopsingle" exact component={ShopSingle}/>
        <Route path="/" component={Error404}/>
      </Switch>
      <div id="fakeLoader"/>
      <Footer/>
    </Router>
  );
}

export default App;
