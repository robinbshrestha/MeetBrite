import React from 'react';

class Signup extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            location_id: 1
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state)
            .then( () => this.props.history.push('/meetup'));
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


    render(){
        return (
            <div className="signup-form">
                <h2>Sign Up</h2>
                <form>
                    {this.renderErrors()}
                    <div>
                        <label>Your name
                            <input 
                            type="text"
                            value={this.state.name}
                            onChange={this.handleInput('name')}
                            />
                        </label>
                    </div>
                    <div>
                        <label>Email address
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
                    <button onClick={this.handleSubmit}>Continue</button>
                </form>
            </div>
        )
    }
}

export default Signup