import React from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../cover.png';
import '../App.css';


const Main = () => {

  const history = useHistory();
    return ( 
         
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
  
          <div>
            Divertite aprendiendo..
            <br></br>
            <button className="button-big blue" onClick={() => {history.push(`/games`)}}>
              Juegos
            </button>

          </div>
          
        </header>

        
      </div>
    )
}

export default Main;