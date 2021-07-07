export default function Slider() {
  return <div className="slider">
    <ul className="slides">
      <li>
        <img src="/src/img/slide1.png" alt=""/>
        <div className="caption slider-content center-align ">
          <div className="container">
            <h2>Welcome to Matjar</h2>
            <h4>Lorem ipsum dolor sit amet.</h4>
            <a href className="button-default">
              Learn More
            </a>
          </div>
        </div>
      </li>
      <li>
        <img src="/src/img/slide2.png" alt=""/>
        <div className="caption slider-content center-align">
          <div className="container">
            <h2>eCommerce Mobile</h2>
            <h4>Lorem ipsum dolor sit amet.</h4>
            <a href className="button-default">
              Learn More
            </a>
          </div>
        </div>
      </li>
      <li>
        <img src="/src/img/slide3.png" alt=""/>
        <div className="caption slider-content center-align">
          <div className="container">
            <h2>Shop UI Template</h2>
            <h4>Lorem ipsum dolor sit amet.</h4>
            <a href className="button-default">
              Learn More
            </a>
          </div>
        </div>
      </li>
    </ul>
  </div>;
}