import {useState} from "react";
import './css/materialize.css';
import './css/style.css';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Footer, Navbar, Product, Sidebar} from "./components";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Checkout from "./pages/Checkout";

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
        <Route path="/cart" exact component={Cart}/>
        <Route path="/product" exact component={Product}/>
        {/*<Route path="/shop-single" exact component={}/>*/}
        <Route path="/checkout" exact component={Checkout}/>
        <Route path="/blog" exact component={Blog}/>
        {/*<Route path="/error404" exact component={}/>*/}
        {/*<Route path="/testimonial" exact component={}/>*/}
        <Route path="/about-us" exact component={About}/>
        <Route path="/contact" exact component={Contact}/>
        {/*<Route path="/login" exact component={}/>*/}
        {/*<Route path="/register" exact component={}/>*/}
      </Switch>
      <div id="fakeLoader"/>
      <Footer/>
    </Router>
  );
}

export default App;
