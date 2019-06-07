 <img src= "https://meetbrite-seeds.s3.amazonaws.com/screenshot1.png"/> 
 
 <a href="https://eventbrite2019.herokuapp.com/" target="_blank">Link to my site!</a>

MeetBrite is a web-app clone of http://www.meetup.com, a platform for users  to discover, join, and create groups based on specific interests in their area.

<img src= "https://meetbrite-seeds.s3.amazonaws.com/screenshot2.png"/>

## Technologies Used
MeetBrite was developed with a Ruby on Rails backend, a PostgreSQL database and is hosted on Heroku.  The backend provides RESTful API's and responds with JSON data.  The front end was modeled with React and Redux and implements styling from CSS.

In addition, this website employed Jbuilder, NodeJs, JQuery to make AJAX requests, Node Package Manager (npm), webpack, React DOM, React Router, React History for browser history manipulation, and AWS for cloud hosting.

## Features
Users can create an account and log in securely (with bcrypt) with custom error handling.  Once logged in, the user has access to a generalized index of created groups and can create a custom group for other users to view. 

<img src= "https://meetbrite-seeds.s3.amazonaws.com/screenshot4.png"/>
<img src= "https://meetbrite-seeds.s3.amazonaws.com/screenshot5.png"/>

## Code Snippets
Utilization of protected and authenticated routes with React Router.  This allows the developer to dictate user access depending on their login state.
```
const App = () => (
    <div>
        <header>
            <NavbarContainer/>
            <AuthRoute path="/register" component={SignupFormContainer} />
            <Route exact path="/" component={Index} />
            <ProtectedRoute path="/meetup" component={Meetup} />
            <Route path="/meetup" component={GroupsContainer} />
            <AuthRoute path="/login" component={LoginFormContainer} />
            <Route path="/create" component={CreateContainer} />
            <Route exact path='/groups/:groupId/' component={GroupShowContainer} />
            <FooterContainer/>
        </header>
    </div>
);
```

Below displays how the developer can redirect users based on where they are on the webpage with the Redux history property.  In this example, the user is redirected to the group index page upon submission of a newly created group, thus allowing the user to see the new group they have created.

```
handleSubmit(e) {
   e.preventDefault();
   this.props.createGroup(this.state)
  .then( () => this.props.history.push('/meetup'));
}

```
## Future Implementations
* Users joining and leaving groups
* Users creating, editing, and deleting events
* Users can RSVP to events in their groups 
