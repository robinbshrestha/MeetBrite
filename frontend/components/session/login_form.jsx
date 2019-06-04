import React from 'react';
import { Link } from 'react-router-dom';
class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            location_id: 1

        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.logindemouser = this.logindemouser.bind(this);
    }

    logindemouser() {
        const demo = Object.assign({}, {email: 'demo@gmail.com', password: 'demo12345' });
        this.props.login(demo);
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };  
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state)
            .then(() => this.props.history.push('/meetup'));
    }

    componentDidMount() {
        this.props.clearErrors();
    }

    renderErrors() {
        return (
            <div>
                {this.props.errors.map((error, i) => (
                    <p key={`error-${i}`}>
                        {error}
                    </p>
                ))}
            </div>
        );
    }

    render() {
        return (
            <div className="all">
                <div className="container">
                    <div className="box1">
                        <h2>Log in <img className="lock" src="https://secure.meetupstatic.com/s/img/09300654065624139187/icon/icon_padlock.gif" /></h2>
                        <p>Not registered with us yet? <Link to="/register" className="not-reg">Sign up</Link></p>
                    </div>
                <form>
                    <div className="box2">
                        <label className="email">Email address:
                            <input className="input"
                                type="text"
                                value={this.state.email}
                                onChange={this.handleInput('email')}
                            />
                        </label>
                        <label className="password">Password
                        <div>
                        <Link to="/login" className="forgot">Forgot your password?</Link>
                        </div>
                            <input className="input"
                                type="password"
                                value={this.state.password}
                                onChange={this.handleInput('password')}
                            />
                        </label>
                        <input type="checkbox" className="checkbox" checked />
                        <label className="keepme">Keep me signed in</label>
                            <div className="err"> {this.renderErrors()}</div>
                        <div className="login-div"><Link className="login-link" onClick={this.handleSubmit}>Log In</Link></div>
                    </div>    
                </form>
                    
                    <div className="box3">
                        <div>
                            <h4><Link className="login-facebook" onClick={this.logindemouser}>Log in with Demo User</Link></h4>
                        </div>
                            <h4><Link className="login-google" onClick={this.handleSubmit}>Log in with Google</Link></h4>                    
                    </div>
                </div>
            </div>
        )
    }

}

export default LoginForm