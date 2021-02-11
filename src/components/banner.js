import '../styles/banner.css'
import { useLocation } from 'react-router-dom';
import '../styles/font.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDoorOpen} from '@fortawesome/free-solid-svg-icons';

const Banner= ()=>{
    const location = useLocation();
    const url = location.pathname.substring(1);
    return (
        <header>
           
                <div className="container"> 
                    <div className="accueil">{ url ? url : 'Accueil' }
                    </div>

                    <div className="container-2"> 
                        <div className="logo tab"> <img src="./logo.jpeg" alt="Logo"></img>
                        </div>

                        <div className="info tab"> Bonjour, John </div>

                        <div className="tab">
                            <button type="button"className="btn-banner"> 07/02/2021 </button>
                        </div>

                        <div className="tab">
                            <FontAwesomeIcon icon={faDoorOpen} className="colorblue" size="2x" />
                        </div>
                    </div>
                    
                </div>
            
        </header>

        
    )

}



export default Banner