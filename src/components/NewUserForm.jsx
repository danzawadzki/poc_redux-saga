import * as React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

/**
 * New user component form.
 *
 */
class NewUserForm extends React.Component {
	state = {
		firstName: '',
		lastName: ''
	};

	/**
	 * Handle submit form.
	 *
	 * @param e
	 */
	handleSubmit = e => {
		e.preventDefault();

		const { firstName, lastName } = this.state;

		this.props.onSubmit({ firstName, lastName });

		this.setState({
			firstName: '',
			lastName: ''
		});
	};

	/**
	 * Handle first name change.
	 *
	 * @param {object} e - Javascript native event.
	 */
	handleFirstNameChange = e => {
		this.setState({
			firstName: e.target.value
		});
	};

	/**
	 * Handle last name change.
	 *
	 * @param {object} e - Javascript native event.
	 */
	handleLastNameChange = e => {
		this.setState({
			lastName: e.target.value
		});
	};

	render() {
		return (
			<Form onSubmit={this.handleSubmit}>
				<FormGroup>
					<Label>First name:</Label>
					<Input
						required
						placeholder="first name..."
						onChange={this.handleFirstNameChange}
						value={this.state.firstName}
					/>
				</FormGroup>
				<FormGroup>
					<Label>Last name:</Label>
					<Input
						required
						placeholder="last name..."
						onChange={this.handleLastNameChange}
						value={this.state.lastName}
					/>
				</FormGroup>
				<FormGroup>
					<Button block outline type="submit" color="success">
						Create
					</Button>
				</FormGroup>
			</Form>
		);
	}
}

export default NewUserForm;
