import '../styles/btncroix.css'
import { useLocation } from 'react-router-dom';

const BtnCroix =()=>{
    const location = useLocation();
    return(
        <div className="btncroix"> 
            <img src="./plus.png" alt="Plus"></img>

        </div>
    )
}

export default BtnCroix