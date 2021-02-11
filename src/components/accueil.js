import '../styles/banner.css'
import '../styles/font.css'
import '../styles/btncroix.css';
import '../styles/intervention.css'
import { Link } from "react-router-dom";
import { Fragment } from 'react';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDoorOpen} from '@fortawesome/free-solid-svg-icons';


const Accueil =()=>{
    
    return(
        <Fragment>
            <div id="btn-num">3 </div>
            <div className="container-btn">
                <Link to="/intervention" className="btn-link1">
            
                <i className="fas fa-long-arrow-alt-right colorgreen fa-2x"></i> <span className="margin-left-2">Mes Interventions</span> </Link>
                <Link to="/historique" className="btn-link1"> <i class="fas fa-history colorgreen fa-2x"></i> <span className="margin-left-2">Historique</span> </Link>
            </div>
            
        </Fragment>
        
    )
}

export default Accueil
