import {  useNavigate } from "react-router-dom";


const ContinueShopping = () => {

    const navigate = useNavigate();
    const navigateTo = () => {
        navigate('/'); 
        }
    return(
        <div className='icon-cart'>
            <button className='continue-btn' onClick={navigateTo}>
                CONTINUE SHOPPING
            </button>
            
        </div>
    )
}
export default ContinueShopping;