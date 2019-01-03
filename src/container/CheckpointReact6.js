import React, { Component } from 'react';
import ButtonName from '../component/listennerEvent/ButtonName';

const BUTTONS = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

class CheckpointReact6 extends Component {
	state = {
		number: 0
	};

	onClick = () => {
		const prop = BUTTONS.map((item,index) => item * item);
		const test= BUTTONS.forEach(function(item, index) {
			console.log("test", test);
			console.log("index",item, index);
		});
		console.log(prop[5])
		this.setState({
			number: prop[5]
		});
	};

	render() {
		return (
			<div className="">
				<div className="row">
					{BUTTONS.map((item) => <ButtonName name={item} onClick={() => this.onClick()} />)}
				</div>
				<span>{this.state.number}</span>
			</div>
		);
	}
}

export default CheckpointReact6;
