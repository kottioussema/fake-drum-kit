import React, { Component } from 'react';

class Carrer extends Component {
	render() {
		const { periode, title, company, about } = this.props;
		return (
			<div>
				<table className="table">
					<tr style={{paddingTop:3 , paddingBottom:3}}>
						<td className="periode">
							<div className="width">{periode}</div>
						</td>
						<td>
							<tr>{title}</tr>
							<tr>{company}</tr>
							<tr>{about}</tr>
						</td>
					</tr>
				</table>
			</div>
		);
	}
}

export default Carrer;
