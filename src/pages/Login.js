export default function Login() {
    return (
        <div className="pages section">
            <div className="container">
                <div className="pages-head">
                    <h3>LOGIN</h3>
                </div>
                <div className="login">
                    <div className="row">
                        <form className="col s12">
                            <div className="input-field">
                                <input
                                    type="text"
                                    className="validate"
                                    placeholder="Username"
                                    required
                                />
                            </div>
                            <div className="input-field">
                                <input
                                    type="password"
                                    className="validate"
                                    placeholder="Password"
                                    required
                                />
                            </div>
                            <a href>
                                <h6>Forgot Password ?</h6>
                            </a>
                            <a href className="button-default">
                                Login
                            </a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}