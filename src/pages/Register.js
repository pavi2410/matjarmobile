export default function Register() {
    return (
        <div className="pages section">
            <div className="container">
                <div className="pages-head">
                    <h3>REGISTER</h3>
                </div>
                <div className="register">
                    <div className="row">
                        <form className="col s12">
                            <div className="input-field">
                                <input
                                    type="text"
                                    className="validate"
                                    placeholder="Name"
                                    required
                                />
                            </div>
                            <div className="input-field">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="validate"
                                    required
                                />
                            </div>
                            <div className="input-field">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="validate"
                                    required
                                />
                            </div>
                            <div className="button-default">Register</div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}