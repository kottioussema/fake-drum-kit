import React, {Component} from "react";
import TeamItem from "./TeamItem";
import "../App.css";


const Teams=[
    {
        source:require("../static/profil.jpg"),
        firstName:"Pierre",
        lastName:"Thomas",
        grade:"Develloper",
        post:"React Js",
        gender:"male"
    },
    {
        source:require("../static/profil2.jpg"),
        firstName:"Marcel",
        lastName:"Bertran",
        grade:"Develloper",
        post:"React Js",
        gender:"male"

    },
    {
      source:require("../static/profil3.jpg"),
      firstName:"Robert",
      lastName:"Martinez",
      grade:"Develloper",
      post:"React Js",
      gender:"male"

  },
  {
      source:require("../static/profil4.jpg"),
      firstName:"Daniel",
      lastName:"Denis",
      grade:"Develloper",
      post:"React Js",
      gender:"female"

  }
]

class TeamList extends Component {

    

    render(){
     return(
       <div className="background">
        <span className="title">Notre équipe</span>
       <div className="rowList">
        {Teams.map(item=> 
          <TeamItem
            source={item.source}
            firstName={item.firstName}
            lastName={item.lastName}
            grade={item.grade}
            post={item.post}
            className="firstName"
            styleImage="profile"
            gender={item.gender}
            />)
        }
       </div>
       </div>
        )
    }
}
export default TeamList;