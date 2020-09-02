import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Main from './views/Main'
import Games from './views/Games'

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
