import {useEffect, useRef, useState} from "react";
import Materialize from "materialize-css";

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
          <a href="index.html">
            <i className="fa fa-home"/>
            Home
          </a>
        </li>
        <li>
          <a href="product.html">
            <i className="fa fa-shopping-basket"/>
            Product List
          </a>
        </li>
        <li>
          <a href="shop-single.html">
            <i className="fa fa-list-alt"/>
            Product Details
          </a>
        </li>
        <li>
          <a href="cart.html">
            <i className="fa fa-shopping-cart"/>
            Shopping Cart
          </a>
        </li>
        <li>
          <a href="checkout.html">
            <i className="fa fa-send"/>
            Checkout
          </a>
        </li>
        <li>
          <a href="blog.html">
            <i className="fa fa-bold"/>
            Blog
          </a>
        </li>
        <li>
          <a href="error404.html">
            <i className="fa fa-hourglass-half"/>
            404
          </a>
        </li>
        <li>
          <a href="testimonial.html">
            <i className="fa fa-support"/>
            Testimonial
          </a>
        </li>
        <li>
          <a href="about-us.html">
            <i className="fa fa-user"/>
            About Us
          </a>
        </li>
        <li>
          <a href="contact.html">
            <i className="fa fa-envelope-o"/>
            Contact Us
          </a>
        </li>
        <li>
          <a href="login.html">
            <i className="fa fa-sign-in"/>
            Login
          </a>
        </li>
        <li>
          <a href="register.html">
            <i className="fa fa-user-plus"/>
            Register
          </a>
        </li>
      </ul>
    </div>
  );
}