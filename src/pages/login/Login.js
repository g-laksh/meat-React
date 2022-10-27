import React , {useState , useEffect} from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from '../Home/Home';
import  './styles.css';
const Login = ({submit}) => {

   
    const handleFormSubmit =(event) => {
        <Route exact path="/home" exact component={Home}/>
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
                <div>
                    <button className='submit' onClick={handleFormSubmit}>Login</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login;