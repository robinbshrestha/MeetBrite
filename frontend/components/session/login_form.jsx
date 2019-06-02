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
            <div className="all">
                <div className="grid-all">
                    <div className="grid">
                        <div className="grid1">
                        <h2 className="gridlog">Log in</h2>
                        <h5 className="not-reg">Not registered with us yet? <Link to="/register" className="not-reg">Sign up</Link></h5>
                        </div>
                    </div>
                    <form>
                        {this.renderErrors()}
                    <div className="grid">
                        <div className>
                            <label>Email address:
                                <div>
                                    <input className="input"
                                        type="text"
                                        value={this.state.email}
                                        onChange={this.handleInput('email')}
                                    />
                                </div>
                            </label>
                        </div>
                    
                        <div>
                            <label>Password
                                <div>
                                    <input className="input"
                                        type="password"
                                        value={this.state.password}
                                        onChange={this.handleInput('password')}
                                    />
                                </div> 
                            </label>
                        </div>
                    
                        <div>
                            <input type="checkbox" checked />
                            <label>Keep me signed in
                            </label>
                        </div>
                            <h4><Link className="login-checkbox" onClick={this.handleSubmit}>Log In</Link></h4>
                        </div>
                    </form>
                    
                    <div className="loginfb">
                        <div>
                            <button>Log in with Facebook</button>
                        </div>
                        <button>Log in with Google</button>
                    </div>
                </div>
            </div>
        )
    }

}

export default LoginForm