var React = require('react');
var Router = require('react-router');
var Repos = require('./GitHub/Repos');
var UserProfile = require('./GitHub/UserProfile');
var Notes = require('./Notes/Notes');
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');

var Profile = React.createClass({
    mixins: [Router.State, ReactFireMixin],
    getInitialState: function () {
        return {
            notes: ['note1', 'note2'],
            bio: {name: 'Tyler'},
            repos: [1,2,3]
        }
    },
    componentDidMount: function () {
        this.ref = new Firebase('brilliant-torch-612.firebaseio.com');
        var childRef = this.ref.child(this.getParams().username);
        this.bindAsArray(childRef, 'notes');
    },
    componentWillUnmount: function () {
        this.unbind('notes');
    },
    handleAddNote: function (newNote) {
        this.ref.child(this.getParams().username).set(this.state.notes.concat([newNote]));
    },
    render: function () {
        var username = this.getParams().username;
        return (
            <div className="row">
                <div className="col-md-4">
                    <UserProfile username={username} bio={this.state.bio} />
                </div>
                <div className="col-md-4">
                    <Repos username={username} repos={this.state.repos} />
                </div>
                <div className="col-md-4">
                    <Notes
                        username={username}
                        notes={this.state.notes}
                        addNote={this.handleAddNote} />
                </div>

            </div>
        )
    }
});

module.exports = Profile;