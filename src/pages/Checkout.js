export default function Checkout() {
  return <div className="checkout pages section">
    <div className="container">
      <div className="pages-head">
        <h3>CHECKOUT</h3>
      </div>
      <div className="checkout-content">
        <div className="row">
          <div className="col s12">
            <ul className="collapsible" data-collapsible="accordion">
              <li>
                <div className="collapsible-header active">
                  <h5>1 - Checkout Method</h5>
                </div>
                <div className="collapsible-body">
                  <h6>Checkout as a Guest or Register</h6>
                  <form action="#" className="checkout-radio">
                    <p>
                      <input
                        type="radio"
                        className="with-gap"
                        id="guest-checkout"
                        name="group1"
                      />
                      <label htmlFor="guest-checkout">
                        <span>Guest Checkout</span>
                      </label>
                    </p>
                    <p>
                      <input
                        type="radio"
                        className="with-gap"
                        id="register"
                        name="group1"
                      />
                      <label htmlFor="register">
                        <span>Register</span>
                      </label>
                    </p>
                  </form>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quis sunt
                  </p>
                  <a href className="button-default">
                    CONTINUE
                  </a>
                  <div className="checkout-login">
                    <div className="row">
                      <form className="col s12">
                        <h6>Login</h6>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <div className="input-field">
                          <h5>Username/Email</h5>
                          <input type="text" className="validate" required/>
                        </div>
                        <div className="input-field">
                          <h5>Password</h5>
                          <input
                            type="password"
                            className="validate"
                            required
                          />
                        </div>
                        <a href>
                          <h6>Forgot Password ?</h6>
                        </a>
                        <a href className="button-default">
                          LOGIN
                        </a>
                      </form>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="collapsible-header">
                  <h5>2 - Billing Information</h5>
                </div>
                <div className="collapsible-body">
                  <div className="billing-information">
                    <form action="#">
                      <div className="input-field">
                        <h5>Name*</h5>
                        <input type="text" className="validate" required/>
                      </div>
                      <div className="input-field">
                        <h5>Email*</h5>
                        <input type="email" className="validate" required/>
                      </div>
                      <div className="input-field">
                        <h5>Company Name</h5>
                        <input type="text" className="validate"/>
                      </div>
                      <div className="input-field">
                        <h5>Address*</h5>
                        <input type="text" className="validate" required/>
                      </div>
                      <div className="input-field">
                        <h5>Town/City*</h5>
                        <input type="text" className="validate" required/>
                      </div>
                      <div className="input-field">
                        <h5>State/Country*</h5>
                        <input type="text" className="validate" required/>
                      </div>
                      <div className="input-field">
                        <h5>Portalcode/ZIP*</h5>
                        <input type="number" className="validate" required/>
                      </div>
                      <div className="input-field">
                        <h5>Phone*</h5>
                        <input type="number" className="validate" required/>
                      </div>
                      <a href className="button-default">
                        CONTINUE
                      </a>
                    </form>
                  </div>
                </div>
              </li>
              <li>
                <div className="collapsible-header">
                  <h5>3 - Shipping Information</h5>
                </div>
                <div className="collapsible-body">
                  <div className="shipping-information">
                    <form action="#">
                      <div className="input-field">
                        <h5>Name*</h5>
                        <input type="text" className="validate" required/>
                      </div>
                      <div className="input-field">
                        <h5>Email*</h5>
                        <input type="email" className="validate" required/>
                      </div>
                      <div className="input-field">
                        <h5>Company Name</h5>
                        <input type="text" className="validate"/>
                      </div>
                      <div className="input-field">
                        <h5>Address*</h5>
                        <input type="text" className="validate" required/>
                      </div>
                      <div className="input-field">
                        <h5>Town/City*</h5>
                        <input type="text" className="validate" required/>
                      </div>
                      <div className="input-field">
                        <h5>State/Country*</h5>
                        <input type="text" className="validate" required/>
                      </div>
                      <div className="input-field">
                        <h5>Portalcode/ZIP*</h5>
                        <input type="number" className="validate" required/>
                      </div>
                      <div className="input-field">
                        <h5>Phone*</h5>
                        <input type="number" className="validate" required/>
                      </div>
                      <a href className="button-default">
                        CONTINUE
                      </a>
                    </form>
                  </div>
                </div>
              </li>
              <li>
                <div className="collapsible-header">
                  <h5>4 - Payment Mode</h5>
                </div>
                <div className="collapsible-body">
                  <div className="payment-mode">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Consectetur provident repellat
                    </p>
                    <form action="#" className="checkout-radio">
                      <input
                        type="radio"
                        className="with-gap"
                        id="bank-transfer"
                        name="group1"
                      />
                      <label htmlFor="bank-transfer">
                        <span>Bank Transfer</span>
                      </label>
                      <input
                        type="radio"
                        className="with-gap"
                        id="cash-on-delivery"
                        name="group1"
                      />
                      <label htmlFor="cash-on-delivery">
                        <span>Cash on Delivery</span>
                      </label>
                      <input
                        type="radio"
                        className="with-gap"
                        id="online-payments"
                        name="group1"
                      />
                      <label htmlFor="online-payments">
                        <span>Online Payments</span>
                      </label>
                      <button className="button-default">Continue</button>
                    </form>
                  </div>
                </div>
              </li>
              <li>
                <div className="collapsible-header">
                  <h5>5 - Order Review</h5>
                </div>
                <div className="collapsible-body">
                  <div className="order-review cart-details-checkout">
                    <div className="row">
                      <div className="col s12">
                        <div className="cart-details">
                          <div className="row">
                            <div className="col s5">
                              <div className="cart-product">
                                <h5>Image</h5>
                              </div>
                            </div>
                            <div className="col s7">
                              <div className="cart-product">
                                <img src="img/shop1.png" alt/>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="cart-details">
                          <div className="row">
                            <div className="col s5">
                              <div className="cart-product">
                                <h5>Name</h5>
                              </div>
                            </div>
                            <div className="col s7">
                              <div className="cart-product">
                                <a href>Jackets Men's</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="cart-details">
                          <div className="row">
                            <div className="col s5">
                              <div className="cart-product">
                                <h5>Quantity</h5>
                              </div>
                            </div>
                            <div className="col s7">
                              <div className="cart-product">
                                <input type="text" defaultValue={1}/>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="cart-details">
                          <div className="row">
                            <div className="col s5">
                              <div className="cart-product">
                                <h5>Unit Price</h5>
                              </div>
                            </div>
                            <div className="col s7">
                              <div className="cart-product">
                                <span>$26.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="cart-details">
                          <div className="row">
                            <div className="col s5">
                              <div className="cart-product">
                                <h5>Total Price</h5>
                              </div>
                            </div>
                            <div className="col s7">
                              <div className="cart-product">
                                <span>$26.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="order-review final-price cart-details-checkout">
                    <div className="row">
                      <div className="col s12">
                        <div className="cart-details">
                          <div className="col s8">
                            <div className="cart-product">
                              <h5>Sub Total</h5>
                            </div>
                          </div>
                          <div className="col s4">
                            <div className="cart-product">
                              <span>$26.00</span>
                            </div>
                          </div>
                        </div>
                        <div className="cart-details">
                          <div className="col s8">
                            <div className="cart-product">
                              <h5>Flat Shipping Rate:</h5>
                            </div>
                          </div>
                          <div className="col s4">
                            <div className="cart-product">
                              <span>$5.00</span>
                            </div>
                          </div>
                        </div>
                        <div className="cart-details">
                          <div className="col s8">
                            <div className="cart-product">
                              <h5>Total</h5>
                            </div>
                          </div>
                          <div className="col s4">
                            <div className="cart-product">
                              <span>$31.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a href className="button-default button-fullwidth">
                      CONTINUE
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>;
}
