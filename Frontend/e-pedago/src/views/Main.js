import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
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
          </div>
          

          
        </header>
        <div>
        <Button onClick={() => {history.push(`/games`)}}></Button>
        </div>

        
      </div>
    )
}

export default Main;