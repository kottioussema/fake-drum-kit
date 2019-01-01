import React, { Component } from 'react';
import InfoProfile from './InfoProfile';



class InfoProfileList extends Component {
	render() {
		const {title } = this.props;
		return (
			<div>
				<div className="titleContainer">
					<span className="stage" style={{paddingLeft: 15}}>{title}</span>
				</div>
				<div>
          {this.props.data.map(item => (
            <InfoProfile info={item.info} particular={item.particular} percent={item.percent} />
          ))}
        </div>
			</div>
		);
	}
}

export default InfoProfileList;
