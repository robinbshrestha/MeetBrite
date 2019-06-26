import React from 'react';
import { Link } from 'react-router-dom';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            location_id: 1
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.logindemouser = this.logindemouser.bind(this);

    }

    logindemouser() {
        const demo = Object.assign({}, { email: 'demo@gmail.com', password: 'demo12345' });
        this.props.login(demo);
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state)
            .then(() => this.props.history.push('/meetup'));
    }

    componentDidMount() {
        this.props.clearErrors();
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }


    render() {
        return (
            <div className="sign-all">
                <div className="sign-container">
                    <div className="sign-box1">
                        <h2>Sign Up</h2>
                        <h4><Link className="login-facebook" onClick={this.logindemouser}>Log in with Demo User</Link></h4>
                    </div>
                    <form>
                        {this.renderErrors()}
                        <div className="sign-box2">
                            <label className="sign-label1">Your name
                            <div>
                                    <input className="sign-input"
                                        type="text"
                                        value={this.state.name}
                                        onChange={this.handleInput('name')}
                                    />
                                </div>
                            </label>
                            <label className="sign-label2">Email address
                            <div>
                                    <input className="sign-input"
                                        type="text"
                                        value={this.state.email}
                                        onChange={this.handleInput('email')}
                                    />
                                </div>
                            </label>

                            <label className="sign-label3">Password
                            <div>
                                    <input className="sign-input"
                                        type="password"
                                        value={this.state.password}
                                        onChange={this.handleInput('password')}
                                    />
                                </div>
                            </label>
                        </div>
                    </form>
                    <div className="sign-box3">
                        <i className="fas fa-map-marker-alt"></i>
                        <label>New York, NY</label>  <label className="sign-change">(change)</label>
                        <div className="signin-public"> Your name is public. We'll use your email address to send you updates, and your location to find Meetups near you. </div>
                        <div className="signin-div"><Link className="signin-link" onClick={this.handleSubmit}>Continue</Link></div>
                        <div className="signin-pos"> When you "Continue", you agree to Meetup's <span className="signin-blue">Terms of Service.</span> We will manage information about you as described in our <span className="signin-blue">Privacy Policy</span>, and <span className="signin-blue">Cookie Policy.</span> </div>

                    </div>
                    <div className="already"> Already a member? <Link className="signup-login" to="/login">Log In</Link> </div>
                </div>
            </div>
        )
    }
}

export default Signup