import React, {Component} from "react";


class NumberItem extends Component {
    render(){
        return(
            <div className="containerNumber">
                <span className="number">{this.props.number}</span>
                <span className="numberInfo">{this.props.infoNumber}</span>
            </div>
        )
    }
}
export default NumberItem;