import * as React from 'react';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';

/**
 * Users list component.
 *
 * @param {Array<Object>} users
 * @param {func} onDeleteUser
 * @returns {*}
 * @constructor
 */
const UsersList = ({ users, onDeleteUser }) => {
	return (
		<ListGroup>
			{users
				.sort((a, b) => {
					if (a.firstName > b.firstName) {
						return 1;
					} else if (a.firstName < b.firstName) {
						return -1;
					} else if (a.lastName > b.lastName) {
						return 1;
					} else if (a.lastName > b.lastName) {
						return -1;
					} else {
						return 0;
					}
				})
				.map(user => (
					<ListGroupItem key={user.id}>
						<section style={{ display: 'flex' }}>
							<div style={{ flexGrow: 1, margin: 'auto' }}>
								{user.id} {user.firstName} {user.lastName}
							</div>
							<Button
								outline
								color="danger"
								onClick={() => onDeleteUser(user.id)}>
								Delete
							</Button>
						</section>
					</ListGroupItem>
				))}
		</ListGroup>
	);
};

export default UsersList;
