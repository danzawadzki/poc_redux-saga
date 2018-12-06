import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	createUserRequest,
	getUsersRequest,
	deleteUserRequest
} from '../actions/users.actions';
import UsersList from './UsersList';
import NewUserForm from './NewUserForm';

/**
 * App view
 *
 */
class App extends Component {
	constructor(props) {
		super(props);

		this.props.getUsersRequest();
	}

	/**
	 * Handle form submit.
	 *
	 * @param {string} firstName - User first name.
	 * @param {string} lastName - User last name.
	 */
	handleSubmit = ({ firstName, lastName }) => {
		this.props.createUserRequest({
			firstName,
			lastName
		});
	};

	/**
	 * Handle user delete.
	 *
	 * @param {number} id - User id.
	 */
	handleDeleteUser = id => {
		this.props.deleteUserRequest(id);
	};

	render() {
		const { users } = this.props;

		return (
			<div style={{ margin: '2rem auto', maxWidth: '600px' }}>
				<NewUserForm onSubmit={this.handleSubmit} />
				<UsersList users={users.items} onDeleteUser={this.handleDeleteUser} />
			</div>
		);
	}
}

export default connect(
	({ users }) => ({ users }),
	{ getUsersRequest, createUserRequest, deleteUserRequest }
)(App);
