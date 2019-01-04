import React, { Component } from 'react';
import ButtonName from '../component/listennerEvent/ButtonName';

const BUTTONS = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

class CheckpointReact6 extends Component {
	state = {
		index:0,
		number: 0
	};

	onClick = (name) => {
		let fact = 1;
		for(let i=name; i>0; i--){
			fact = i* fact;
		}
		this.setState({
			index: name,
			number: fact
		});
	};

	render() {
		return (
			<div>
				<div className="row">
					{BUTTONS.map((item) => <ButtonName name={item} onClick={this.onClick} />)}
				</div>
				<span>the factorial of {this.state.index} is : {this.state.number} </span>
			</div>
		);
	}
}

export default CheckpointReact6;
