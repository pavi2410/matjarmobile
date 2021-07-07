export default function Contact() {
  return <div className="pages section">
    <div className="container">
      <div className="pages-head">
        <h3>CONTACT US</h3>
      </div>
      <div className="contact-us">
        <div className="row">
          <div className="col s12">
            <form
              action="send-mail.php"
              className="contact-form"
              id="contact-form"
              method="post"
            >
              <div className="form-group" id="name-field">
                <input
                  type="text"
                  className="validate"
                  id="form-name"
                  name="form-name"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="form-group" id="email-field">
                <input
                  type="email"
                  className="validate"
                  id="form-email"
                  name="form-email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="form-group" id="subject-field">
                <input
                  type="text"
                  className="validate"
                  id="form-subject"
                  name="form-subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form-group" id="message-field">
                <textarea
                  name="form-message"
                  id="form-message"
                  cols={30}
                  rows={10}
                  className="materialize-textarea"
                  placeholder="Your Message"
                  required
                  defaultValue={""}
                />
              </div>
              <div className="form-group">
                <button
                  className="button-default"
                  type="submit"
                  id="submit"
                  name="submit"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>;
}
