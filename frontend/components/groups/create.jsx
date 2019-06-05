import React from 'react';
import { withRouter, Route, Redirect } from 'react-router-dom';

class CreateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.group;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createGroup(this.state)
        .then( () => this.props.history.push('/meetups'));
    }

    render () {
        return (

            <div className="create-all">
                <form className="createform" onSubmit={this.handleSubmit}>
                <div className="create-1">
                    <h1>First, set up your group's location</h1>
                    <h4>Meetup groups meet locally and in person.  We'll connect you with people who live in and around your area</h4>
                    <input type='text' value='New York, NY' /><div>(change location)</div>
                </div>
                <div className="create-2">
                    <h1>What will your group's name be?</h1>
                    <h4>Choose a name that will give people a clear idea of what the group is about.</h4>
                    <input type='text' onChange={this.update('title')} value={this.state.title}  />
                </div>
                <div className="create-3">
                    <h1>Now describe what your group will be about</h1>
                    <h4>People will see this when we promote your group, but you’ll be able to add to it later, too.</h4>
                    <textarea type='text' onChange={this.update('description')} value={this.state.description} />
                    <input type="submit" value="Create your group!" />
                </div>
                </form>
            </div>



        );
    }
}

export default withRouter(CreateForm);