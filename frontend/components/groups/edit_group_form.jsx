import React from 'react';
import {withRouter, Route, Redirect} from 'react-router-dom';

class EditGroupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...this.props.group
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }


componentDidMount(){
    this.props.fetchGroup(this.props.match.params.groupId).then(({group}) => {
        this.setState({...group});
    });
}

componentDidUpdate(prevProps) {
    if (prevProps.group.id != this.props.match.params.groupId) {
        this.props.fetchGroup(this.props.match.params.groupId);
    }
}

handleChange(field) {
    return e => this.setState({ [field]: e.target.value });
}

handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('group[id]', this.state.id)
    formData.append('group[title]', this.state.title)
    formData.append('group[description]', this.state.description)
    formData.append('group[organizer_id]', this.state.organizer_id)
    formData.append('group[location_id]', this.state.location_id)

    this.props.action(formData).then(() => this.props.history.push(`/groups/${formData.get('group[id]')}`));

}

render() {
    // if (!this.props.group) {
    //     return null;
    // }

    if (Object.values(this.props.group).length === 0) { return null; }


    return( 
        <div className='edit-all'>
            <Route 
                path='/create'
                render={ () => {
                    if (!this.props.currentUser) {
                        return <Redirect to='/login' />
                    } else if (this.props.currentUser != this.props.group.organizer_id) {
                        return <Redirect to='/' />
                    }
                }
            }
            />
            <h1 className='update-group-title'>{this.state.title}</h1>
            <form className='update-group-form' onSubmit={this.handleSubmit}>
                <h3 className='update-group-head'>About this MeetBrite Group</h3>

                <div className='update-group-name'>
                    <label>MeetBrite Group Name</label>
                    <input type="text" value={this.state.title} onChange={this.handleChange('title')}/>
                </div>

                <div className='update-group-description'>
                    <label>MeetBrite Group Description</label>
                    <p>What is this group's purpose? Who should join? Why?</p>
                    <textarea value={this.state.description} onChange={this.handleChange('description')}/>
                </div>
                <h3 className='update-group-subh'>Where</h3>
                <div className='update-group-location'>
                    <div className='update-group-loc-vals'>
                        <div>
                            <label className='country'>Country</label>
                            <span>USA</span>
                        </div>
                        <div>
                            <label className='zip'>ZIP</label>
                            <input type="text" id="zip-val" defaultValue='10001' />
                        </div>
                    </div>
                    <p>Only city and town changes to your MeetBrite are permitted.</p>
                </div>

                <h3 className='update-group-subh'>Meetbrite group logo</h3>
            </form>
        </div>
    )
}

}
export default withRouter(EditGroupForm)