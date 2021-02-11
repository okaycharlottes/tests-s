// import logo from './logo.svg';
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from 'react'
import Banner from './banner'
import Historique from "./historique";
import Intervention from "./intervention";
import Accueil from "./accueil";
import BtnCroix from "./btncroix";

const App =()=>{

  return (
      <Router> 
          <React.Fragment> 
              <Banner/>
              
                <Route path="/" exact component={Accueil} />
                <Route path="/intervention" component={Intervention} />
                <Route path="/historique" component={Historique} />
              <BtnCroix/>
          </React.Fragment>
      </Router>
          
        )
}

export default App
