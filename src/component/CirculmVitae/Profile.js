import React, { Component } from 'react';

class Profile extends Component {
	render() {
		const { image, fullName, stage } = this.props;
		return (
			<div>
				<div>
					<span className="fullName">
						{fullName} <br />
					</span>
					<span className="stage">{stage}</span>
				</div>
				<img src={image} className="profile" alt="team" />
			</div>
		);
	}
}

export default Profile;
