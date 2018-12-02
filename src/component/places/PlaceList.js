import React, {Component} from "react";

import TeamItem from "../TeamItem";

const Places=[
  {
      source:require("../../static/tunis.jpg"),
      lastName:"Tunis",
      
  },
  {
      source:require("../../static/sousse.JPG"),
      lastName:"Sousse",
      
  },
  {
    source:require("../../static/sfax.jpg"),
    lastName:"Sfax",
    
},

]


class PlaceList extends Component {
  render(){
    return(
      <div className="list">
        <span className="placeName">Ou se passent les session?</span>
        <br/><br/><br/><br/>
          <span className="subTitle">Les sessions sepassent dans les hackerspaces de GOMYCode dans les viles suivants:L'hébergementest possible dans la limite des places disponible</span>
          <br/><br/><br/><br/>
            <div className="rowList">
              {Places.map(item=> 
                <TeamItem
                  source={item.source}
                  lastName={item.lastName}
                  className="placeName"
                  styleImage="placeImage"
                  container="container"
                  />)
              }
            </div>
       </div>
       
    )
  }
}

export default PlaceList;