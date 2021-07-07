import shop1 from '../img/shop1.png'

function ProductCard() {
  return (
    <div className="content">
      <img src={shop1} alt=""/>
      <h5>
        <a href>Product 01</a>
      </h5>
      <div className="star">
        <span className="active">
          <i className="fa fa-star"/>
        </span>
        <span className="active">
          <i className="fa fa-star"/>
        </span>
        <span className="active">
          <i className="fa fa-star"/>
        </span>
        <span className="active">
          <i className="fa fa-star"/>
        </span>
        <span className="active">
          <i className="fa fa-star"/>
        </span>
      </div>
      <h6 className="price">$40</h6>
    </div>
  );
}

export default function Product({title, loadMore = false}) {
  return (
    <div className="section product">
      <div className="container">
        <div className="section-head">
          <h4>{title}</h4>
          <p>The Best Quality</p>
        </div>
        <div className="row">
          <div className="col s6">
            <ProductCard />
          </div>
          <div className="col s6">
            <ProductCard />
          </div>
        </div>
        <div className="row">
          <div className="col s6">
            <ProductCard/>
          </div>
          <div className="col s6">
            <ProductCard />
          </div>
        </div>
        {
          loadMore && (
            <div className="load-more">
              <a href className="product-button">
                Load More
              </a>
            </div>
          )
        }
      </div>
    </div>
  );
}