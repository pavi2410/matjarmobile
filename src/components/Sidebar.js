import {useEffect, useRef, useState} from "react";
import Materialize from "materialize-css";
import {Link} from "react-router-dom";

export default function Sidebar({sidebarOpen, setSidebarOpen}) {
  const sidebarRef = useRef(null)
  const sidebarOverlayRef = useRef(null)
  const [sidenavInstance, setSidenavInstance] = useState(null)

  useEffect(() => {
    const instance = Materialize.Sidenav.init(sidebarRef.current, {
      edge: 'left',
      onCloseEnd: () => {
        setSidebarOpen(false);
      }
    });
    sidebarOverlayRef.current = document.querySelector('.sidebar-overlay')
    console.log(sidebarOverlayRef.current);
    setSidenavInstance(instance)
    return () => instance.destroy()
  }, [sidebarRef, sidebarOverlayRef, setSidebarOpen]);

  useEffect(() => {
    if (sidebarOverlayRef.current === null) return
    console.log('overlay ref');
    sidebarOverlayRef.current.style.display = sidebarOpen ? 'block' : 'none'
  }, [sidebarOpen, sidebarOverlayRef]);

  useEffect(() => {
    if (sidenavInstance === null) return
    if (sidebarOpen) {
      sidenavInstance.open()
    }
  }, [sidebarOpen, sidenavInstance]);

  return (
    <div className="side-nav-panel-left">
      <ul id="slide-out-left" className="side-nav side-nav-panel collapsible" ref={sidebarRef}>
        <li className="profil">
          <img src="/src/img/profile.jpg" alt=""/>
          <h2>John Doe</h2>
          <h6>Mobile Developer</h6>
        </li>
        <li className="li-top">
          <Link to="/">
            <i className="fa fa-home"/>
            Home
          </Link>
        </li>
        <li>
          <Link to="/product">
            <i className="fa fa-shopping-basket"/>
            Product List
          </Link>
        </li>
        <li>
          <Link to="/shop-single">
            <i className="fa fa-list-alt"/>
            Product Details
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <i className="fa fa-shopping-cart"/>
            Shopping Cart
          </Link>
        </li>
        <li>
          <Link to="/checkout">
            <i className="fa fa-send"/>
            Checkout
          </Link>
        </li>
        <li>
          <Link to="/blog">
            <i className="fa fa-bold"/>
            Blog
          </Link>
        </li>
        <li>
          <Link to="/error404">
            <i className="fa fa-hourglass-half"/>
            404
          </Link>
        </li>
        <li>
          <Link to="/testimonial">
            <i className="fa fa-support"/>
            Testimonial
          </Link>
        </li>
        <li>
          <Link to="/about-us">
            <i className="fa fa-user"/>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <i className="fa fa-envelope-o"/>
            Contact Us
          </Link>
        </li>
        <li>
          <Link to="/login">
            <i className="fa fa-sign-in"/>
            Login
          </Link>
        </li>
        <li>
          <Link to="/register">
            <i className="fa fa-user-plus"/>
            Register
          </Link>
        </li>
      </ul>
    </div>
  );
}