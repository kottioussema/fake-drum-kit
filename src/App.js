import React, { Component } from 'react';
import './App.css';

class App extends Component {
  avance = () => { 
    song.currentTime+= 10
   };

  wakhir =() => { 
    song.currentTime-= 10
   };

  reset =() => {
    score.innerHTML=0;
    song.currentTime = 0
  };

  play =() => { 
    document.body.style.backgroundColor = colors[(score.innerHTML % colors.length)];
    score.innerHTML++;
    song.play()
  };

  pause =() =>{ 
    song.pause();
    () => {setInterval(pause,1000);}
   };

  

  const song = document.getElementById("song");
  const score = document.getElementById("score");
  const colors = ["green","skyblue","red","black","white","beige"];
  render() {
    return (
      <html lang="en">
      <head>
        
       
      </head>
      
      <body onkeypress={this.play}>
        
        <center>
          <audio id="song" src="song.mp3"></audio>
          <h1 id="score"> 0 </h1>
          
          <button id="9adim" onclick={this.avance}>9adim</button>
          <button onclick={this.reset}> Reset </button>
          <button id="wakhir" onclick={this.wakhir}>9adim bitweli</button>
        </center>
      
      </body>
      
      <script>

       
        
      
       
         
        
        
      </script>
      
      
      
      </html>
    );
  }
}

export default App;
