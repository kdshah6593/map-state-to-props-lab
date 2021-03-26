import React, { Component } from 'react';
import { connect } from 'react-redux';
class Users extends Component {

  render() {
    let allUsers = this.props.users.map(user => <li>{user.username}</li>);
    
    return (
      <div>
        {this.props.userCount} Users!
        <ul>
          {allUsers}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return {
    users: state.users,
    userCount: state.users.length
  }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
