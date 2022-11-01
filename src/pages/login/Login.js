import {BrowserRouter as Router,Switch,Route, useHistory } from "react-router-dom";
import Home from '../Home/Home';

import  './styles.css';
const Login = ({submit}) => {
    const history = useHistory();

   
    const handleFormSubmit =(event) => {
        history.push("/home")
    };
    const handleFormSbmit =(event) => {
        history.push("/admin")
    };
    
  return (
    <div className='comt'>
        <div className='app-wrapper'>
            <div>
                 <h2 className='title'>login</h2>
            </div>
            <form className='form-wrapper'>
                
                <div>
                    <label className='label'>Email</label>
                    <input type='email' className='input' name='email' />
                
                </div>
         
                <div>
                    <label className='label'>Password</label>
                    <input type='password' className='input' name='password' />
                   
                    </div>
                <div class="row">
                <div class="re">
                    <button className='submit' onClick={handleFormSubmit}>Login</button>
                    
                </div>
                {/* <div class="re">
                    <button className='submit' onClick={handleFormSbmit}>Login as Admin</button>
                    
                </div> */}
                </div>

            </form>
        </div>
        
    </div>
    
  )
  
}

export default Login;