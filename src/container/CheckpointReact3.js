import React, { Component } from "react";
import ProgramList from "../component/programs/ProgramList";
import NumberList from "../component/numbers/NumberList";
import PlaceList from "../component/places/PlaceList";

class Checkpointreact3 extends Component {
  render() {
    return (
      <div>
        <ProgramList />
        <NumberList />
        <PlaceList />
      </div>
    );
  }
}

export default Checkpointreact3;
