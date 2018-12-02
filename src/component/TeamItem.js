import React, {Component} from "react";
import "../App.css";



class TeamItem extends Component{
    render(){
        return(
            <div className={this.props.container}>    
                <img className={this.props.styleImage} src={this.props.source} alt="profile"/>
                <br/>
                <span className={this.props.className}>{this.props.firstName}</span>
                <span className="lastName">{` ${this.props.lastName}`}<br/></span>
                <span className="infos">{this.props.grade}<br/></span>
                <span className="infos">{this.props.post}</span>
            </div>
        )
    }
}

export default TeamItem;
