import React, { Component } from 'react';
import { Line } from 'rc-progress';



class InfoProfile extends Component {
	render() {
		const { info, particular, percent } = this.props;
		return (
			<div>
				<div style={{ paddingTop: 8, paddingBottom: 8 }}>
					<span className="white" style={{ paddingLeft: 15 }}>
						{info} <br />
					</span>
					{particular != '' ? (
						<span className="white" style={{ paddingLeft: 15 }}>
							{particular}
						</span>
					) : (
						<Line
							className="maxBox"
							style={{ marginLeft: 15 }}
							percent={percent}
							strokeLinecap="square"
							strokeWidth="5"
							trailWidth="5"
							strokeColor="#ffffff"
							trailColor="#017c73"
						/>
					)}
				</div>
			</div>
		);
	}
}

export default InfoProfile;
