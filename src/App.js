import React from 'react';
import './css/App.css';
import NavBar from "./containers/navBar"
import LowerBlock from "./containers/lowerBlock"
import { Provider } from './context/context'

import { BrowserRouter } from 'react-router-dom'


class App extends React.Component {

  render(){
    return (
      <div className="App">
            <BrowserRouter>
              <Provider>
                <NavBar />
                <LowerBlock />
              </Provider>
            </BrowserRouter>
        </div>
    );
  }
}

export default App;

// NAME: Scrawling
// 2 STEPS AHEAD: Open-mics-in-your-area section. Have the major cities listed and people can add shows that are 
// upcoming {initially will have to be manually researched and plugged by yours truly} (obvioulsy this is all POST_MVP for portfolio... but maybe PRE advertistment!)
