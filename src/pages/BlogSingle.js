export default function BlogSingle() {
  return <div className="pages section">
    <div className="container">
      <div className="blog-single">
        <img src="img/blog1.png" alt/>
        <div className="blog-single-content">
          <h5>How To Design Fresh and Clean</h5>
          <div className="date">
            <span>
              <i className="fa fa-calendar"/> Dec 22, 2018
            </span>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            error quibusdam culpa assumenda maiores ea dicta fuga a itaque rerum
            deserunt, incidunt, nulla, vero amet sapiente reiciendis.
            Perspiciatis debitis, accusamus? Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Accusamus eligendi porro deleniti
            quisquam omnis rem quibusdam corporis alias, et quae, assumenda unde
            pariatur vitae placeat veritatis nam quia, velit delectus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ut
            vitae recusandae perferendis, temporibus, ullam, tenetur eius
            necessitatibus aliquam sequi, eum atque ratione ipsam in aliquid
            vero numquam id minus!
          </p>
          <div className="share-post">
            <ul>
              <li>
                <a href>
                  <i className="fa fa-facebook"/>
                </a>
              </li>
              <li>
                <a href>
                  <i className="fa fa-twitter"/>
                </a>
              </li>
              <li>
                <a href>
                  <i className="fa fa-google"/>
                </a>
              </li>
              <li>
                <a href>
                  <i className="fa fa-linkedin"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="comment">
          <h5>1 Comments</h5>
          <div className="comment-details">
            <div className="row">
              <div className="col s3">
                <img src="img/user-comment.jpg" alt/>
              </div>
              <div className="col s9">
                <div className="comment-title">
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
        <div className="comment-form">
          <div className="comment-head">
            <h5>Post Comment in Below</h5>
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
                  placeholder="Your Comment"
                  defaultValue={""}
                />
              </div>
              <div className="form-button">
                <button className="button-default">Post Comments</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>;
}
