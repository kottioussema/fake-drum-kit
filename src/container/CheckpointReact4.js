import React, { Component } from 'react';
import ButtonName from '../component/listennerEvent/ButtonName';
import InfoTeam from '../component/listennerEvent/InfoTeam';

const TEAM = [
	{ id:"1", name: 'Ghazi', description: 'bo5li baaaarchaa ', image: require('../static/profil2.jpg') },
	{ id:"2" , name: 'Ashref', description: 'ki nthi3ou fi blasa y9olek dima fi twil:D', image: require('../static/profil4.jpg') },
	{ id:"3", name: 'Taha', description: '9aray', image: require('../static/profil3.jpg') }
];

class CheckpointReact4 extends Component {

	state = {
		person : {}
	};

  onClick=(id)=>{

	const prop = TEAM.filter(el => el.id.includes(id))
	this.setState({
		person : prop[0]
	})
	

	}

	render() {
		return (
			<div>
				<div className="row">{TEAM.map((item) =>  <ButtonName name={item.name} onClick={()=>this.onClick(item.id)} />)}</div>
				<InfoTeam person={this.state.person} />
			</div>
		);
	}
}

export default CheckpointReact4;
