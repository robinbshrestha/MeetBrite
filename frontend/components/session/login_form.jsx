import React from 'react';

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

    render() {
        return (
            <div className="login-form">
                <h2>Log in</h2>
                <form>
                    <div>
                        <label>Email address:
                            <input
                                type="text"
                                value={this.state.email}
                                onChange={this.handleInput('email')}
                            />
                        </label>
                    </div>
                    <div>
                        <label>Password
                            <input
                                type="password"
                                value={this.state.password}
                                onChange={this.handleInput('password')}
                            />
                        </label>
                    </div>
                    <button onClick={this.handleSubmit}>Log In</button>
                </form>
            </div>
        )
    }

}

export default LoginForm