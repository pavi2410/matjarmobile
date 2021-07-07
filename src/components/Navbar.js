import {Link} from "react-router-dom";

export default function Navbar({setSidebarOpen}) {
  return (
    <div className="navbar-top">
      <div className="side-nav-panel-left">
        <button data-activates="slide-out-left" className="side-nav-left" onClick={() => setSidebarOpen(true)}>
          <i className="fa fa-bars"/>
        </button>
      </div>
      <div className="site-brand">
        <Link to="/">
          <h1>360 Commerce</h1>
        </Link>
      </div>
      <div className="side-nav-panel-right">
        <Link to="/cart" className="side-nav-right">
          <i className="fa fa-shopping-basket"/>
          <span>2</span>
        </Link>
      </div>
    </div>
  );
}