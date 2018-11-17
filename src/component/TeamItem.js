import React, {Component} from "react";
import "../App.css";



class TeamItem extends Component{
    render(){
        return(
            <div>    
                <img className="profile" src={this.props.source} alt="profile"/>
                <br/>
                <span className="firstName">{this.props.firstName}</span>
                <span className="lastName">{` ${this.props.lastName}`}<br/></span>
                <span className="infos">{this.props.grade}<br/></span>
                <span className="infos">{this.props.post}</span>
            </div>
        )
    }
}

export default TeamItem;
