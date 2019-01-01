import React, { Component } from 'react';
import Carrer from './Carrer';



class CarrerList extends Component {
	render() {
		return (
			<div>
			<div className="borderCarrer">
					<span className="mode">{this.props.mode}</span>
				</div>
				<div>
					{this.props.data.map((item) => (
						<Carrer periode={item.periode} title={item.title} company={item.company} about={item.about} />
					))}
				</div>
			</div>
		);
	}
}

export default CarrerList;
