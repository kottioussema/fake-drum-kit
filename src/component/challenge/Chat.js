import React, { Component } from "react";

class TeamItem extends Component {
    state={
        user1:"",
        user2:"",
        message:[]
    }

    handleChange(event) {
        this.setState({
            user1: event.target.value,
        });
      }
      handleChange2(event) {
        this.setState({
            user2: event.target.value,
        });
      }
      getuser1=() =>{

        this.setState({ message : this.state.message.concat({id :1 , message : this.state.user1}),
        user1:""
                         })
      }
      getuser2=() =>{

        this.setState({ message : this.state.message.concat({id : 2 , message : this.state.user2 }),
        user2:"" })
    }
    

  render() {
    return (

      <div>
           <div>
        {
          this.state.message.map((msg ) => {
            return (
              <div >
                <div style={msg.id === 1 ? {float : "right" , color : 'red' } : {flaot : 'left' , color : 'blue'}} >
                 {msg.message} 
                </div>
                <br/>
                <br/>
              </div>
            )
          })
        }
       </div>
        <input type="text"  onChange={(e) => this.handleChange(e)} value={this.state.user1} />
        <button className="button" onClick={this.getuser1} >user1</button>
        <input type="text"  onChange={(e) => this.handleChange2(e)}  value={this.state.user2} />
        <button className="button" onClick={this.getuser2} >user2</button>
      </div>
    );
  }
}

export default TeamItem;
