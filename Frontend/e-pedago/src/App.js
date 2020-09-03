import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Main from './components/Main'
import Games from './components/Games'

function App() {
  return (
        <BrowserRouter>
            <Switch>
              <Route exact path= '/' render={props => <Main />}/>
              <Route exact path= '/games' render={props => <Games />}/>

            </Switch>
       </BrowserRouter>
  )
}

export default App;
