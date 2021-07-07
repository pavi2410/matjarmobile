export default function Cart() {
  return (
    <div className="cart pages section">
      <div className="container">
        <div className="pages-head">
          <h3>CART</h3>
        </div>
        <div className="cart-content-product">
          <div className="row">
            <div className="col s12">
              <div className="cart-details">
                <div className="col s5">
                  <div className="cart-product">
                    <h5>Image</h5>
                  </div>
                </div>
                <div className="col s7">
                  <div className="cart-product">
                    <img src="img/cart.png" alt />
                  </div>
                </div>
              </div>
              <div className="cart-details">
                <div className="col s5">
                  <div className="cart-product">
                    <h5>Name</h5>
                  </div>
                </div>
                <div className="col s7">
                  <div className="cart-product">
                    <a href>Glass</a>
                  </div>
                </div>
              </div>
              <div className="cart-details">
                <div className="col s5">
                  <div className="cart-product">
                    <h5>Quantity</h5>
                  </div>
                </div>
                <div className="col s7">
                  <div className="cart-product">
                    <input type="text" defaultValue={1} />
                  </div>
                </div>
              </div>
              <div className="cart-details">
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
              <div className="cart-details">
                <div className="col s5">
                  <div className="cart-product">
                    <h5>Total Pricey</h5>
                  </div>
                </div>
                <div className="col s7">
                  <div className="cart-product">
                    <span>$26.00</span>
                  </div>
                </div>
              </div>
              <div className="cart-details">
                <div className="col s5">
                  <div className="cart-product">
                    <h5>Action</h5>
                  </div>
                </div>
                <div className="col s7">
                  <div className="cart-product">
                    <a href>
                      <i className="fa fa-trash" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="button-default">Checkout</button>
        </div>
        <div className="cart-shipping">
          <h4>Estimate Shipping and Tax</h4>
          <div className="cart-shipping-content">
            <h5>Country*</h5>
            <select className="browser-default">
              <option>Afghanistan</option>
              <option>Albania</option>
              <option>Algeria</option>
            </select>
            <h5>State/Province</h5>
            <select className="browser-default">
              <option>Afghanistans</option>
              <option>Albania</option>
              <option>Algeria</option>
            </select>
            <h5>Zip/Portal Code</h5>
            <input type="text" />
            <button className="button-default">Get a Quote</button>
          </div>
        </div>
        <div className="cart-discount">
          <h4>Discount Codes</h4>
          <div className="cart-discount-content">
            <h5>Enter your coupon code in below</h5>
            <input type="text" />
            <button className="button-default">Apply Coupon</button>
          </div>
        </div>
        <div className="cart-total">
          <h4>Shopping Cart Total</h4>
          <table>
            <thead>
            <tr>
              <td>Subtotal</td>
              <td>Total</td>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>$43.00</td>
              <td>$43.00</td>
            </tr>
            </tbody>
          </table>
          <button className="button-default">Process to Checkout</button>
        </div>
      </div>
    </div>
  )
}