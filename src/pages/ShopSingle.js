export default function ShopSingle() {
    return (
        <div className="pages section">
            <div className="container">
                <div className="shop-single">
                    <img src="img/shop-single.png" alt />
                    <h5>Fashion Elegant</h5>
                    <span>$16</span>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
                        distinctio quis similique exercitationem
                    </p>
                    <button type="button" className="button-default">
                        ADD TO CART
                    </button>
                </div>
                <div className="review">
                    <h5>1 reviews</h5>
                    <div className="review-details">
                        <div className="row">
                            <div className="col s3">
                                <img src="img/user-comment.jpg" alt className="responsive-img" />
                            </div>
                            <div className="col s9">
                                <div className="review-title">
                                    <span>
                                        <strong>John Doe</strong> | Juni 5, 2016 at 9:24 am |{" "}
                                        <a href>Reply</a>
                                    </span>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Perferendis accusantium corrupti asperiores et praesentium
                                    dolore.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="review-form">
                    <div className="review-head">
                        <h5>Post Review in Below</h5>
                        <p>Lorem ipsum dolor sit amet consectetur*</p>
                    </div>
                    <div className="row">
                        <form className="col s12 form-details">
                            <div className="input-field">
                                <input
                                    type="text"
                                    required
                                    className="validate"
                                    placeholder="Name"
                                />
                            </div>
                            <div className="input-field">
                                <input
                                    type="email"
                                    className="validate"
                                    placeholder="Email"
                                    required
                                />
                            </div>
                            <div className="input-field">
                                <input
                                    type="text"
                                    className="validate"
                                    placeholder="Subject"
                                    required
                                />
                            </div>
                            <div className="input-field">
                                <textarea
                                    name="textarea-message"
                                    id="textarea1"
                                    cols={30}
                                    rows={10}
                                    className="materialize-textarea"
                                    placeholder="Your Review"
                                    defaultValue={""}
                                />
                            </div>
                            <div className="form-button">
                                <div className="button-default">Post Review</div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}