export default function Product() {
    return (
        <div className="pages section product">
            <div className="pages-head">
                <h3>PRODUCT LIST</h3>
            </div>
            <div className="container">
                <div className="input-field">
                    <select>
                        <option value>Popular</option>
                        <option value={1}>New Product</option>
                        <option value={2}>Best Sellers</option>
                        <option value={3}>Best Reviews</option>
                        <option value={4}>Low Price</option>
                        <option value={5}>High Price</option>
                    </select>
                </div>
                <div className="row">
                    <div className="col s6">
                        <div className="content">
                            <img src="img/shop1.png" alt />
                            <h5>
                                <a href>Product 01</a>
                            </h5>
                            <div className="star">
                                <span className="active">
                                    <i className="fa fa-star" />
                                </span>
                                <span className="active">
                                    <i className="fa fa-star" />
                                </span>
                                <span className="active">
                                    <i className="fa fa-star" />
                                </span>
                                <span className="active">
                                    <i className="fa fa-star" />
                                </span>
                                <span className="active">
                                    <i className="fa fa-star" />
                                </span>
                            </div>
                            <h6 className="price">$40</h6>
                        </div>
                    </div>
                    <div className="col s6">
                        <div className="content">
                            <img src="img/shop2.png" alt />
                            <h5>
                                <a href>Product 01</a>
                            </h5>
                            <div className="star">
                                <span className="active">
                                    <i className="fa fa-star" />
                                </span>
                                <span className="active">
                                    <i className="fa fa-star" />
                                </span>
                                <span className="active">
                                    <i className="fa fa-star" />
                                </span>
                                <span className="active">
                                    <i className="fa fa-star" />
                                </span>
                                <span className="active">
                                    <i className="fa fa-star" />
                                </span>
                            </div>
                            <h6 className="price">$40</h6>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s6">
                        <div className="content">
                            <img src="img/shop3.png" alt />
                            <h5>
                                <a href>Product 01</a>
                            </h5>
                            <div className="star">
                                <span className="active">
                                    <i className="fa fa-star" />
                                </span>
                                <span className="active">
                                    <i className="fa fa-star" />
                                </span>
                                <span className="active">
                                    <i className="fa fa-star" />
                                </span>
                                <span className="active">
                                    <i className="fa fa-star" />
                                </span>
                                <span className="active">
                                    <i className="fa fa-star" />
                                </span>
                            </div>
                            <h6 className="price">$40</h6>
                        </div>
                    </div>
                    <div className="col s6">
                        <div className="content">
                            <img src="img/shop4.png" alt />
                            <h5>
                                <a href>Product 01</a>
                            </h5>
                            <div className="star">
                                <span className="active">
                                    <i className="fa fa-star" />
                                </span>
                                <span className="active">
                                    <i className="fa fa-star" />
                                </span>
                                <span className="active">
                                    <i className="fa fa-star" />
                                </span>
                                <span className="active">
                                    <i className="fa fa-star" />
                                </span>
                                <span className="non-active">
                                    <i className="fa fa-star" />
                                </span>
                            </div>
                            <h6 className="price">$40</h6>
                        </div>
                    </div>
                </div>
                <div className="load-more">
                    <a href className="product-button">
                        Load More
                    </a>
                </div>
            </div>
        </div>
    );
}