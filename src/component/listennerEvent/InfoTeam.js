import React, { Component } from 'react';

class InfoTeam extends Component {
	render() {
		const {image,name,description}=this.props.person;
		return (
			<div className="column">
				<img src={image} className="profile" alt="team" />
				<div className="nameContainer">
					<span className="nameTeam">{name}</span>
				</div>
				<span>{description}</span>
			</div>
		);
	}
}

export default InfoTeam;
