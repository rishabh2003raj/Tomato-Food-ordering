import React, { useContext, useEffect, useState } from 'react';
import './LoginPopUp.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../contex/StoreContext';
import axios from "axios"

const LoginPopUp = ({ setShowLogin }) => {
    const { url , setToken} = useContext(StoreContext);

    const [currentState, setCurrentState] = useState("Log In"); // State to track the current form state (Sign Up or Sign In)
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    });

    console.log(currentState)

    const onLogin = async (event) => {
        event.preventDefault();
        let newUrl =url;
        if(currentState==="Log In"){
            newUrl += "/api/user/login"
        }
        else{
            newUrl += "/api/user/register"
        }
       

         console.log("Sending data:", data);
        console.log("Request URL:", newUrl);

        const response  = await axios.post(newUrl,data);
        console.log(response)

        if(response.data.success){
            setToken(response.data.token);
            localStorage.setItem("token",response.data.token)
            setShowLogin(false)
        }else{
            alert(response.data.message)
        }
    };

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }));
    };

    // useEffect(() => {
    // }, [data]);
    console.log(data);

    return (
        <div className='login-popup'>
            <form onSubmit={onLogin} className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
                </div>
                <div className="login-popup-input">
                    {currentState === "Log In" ? null : <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your Name' required />}
                    <input name='email' type="email" onChange={onChangeHandler} value={data.email} placeholder='Your Email' required />
                    <input name='password' type="password" onChange={onChangeHandler} value={data.password} placeholder='Your Password' required />
                </div>
                <button type="submit">{currentState === "Sign Up" ? "Create Account" : "Log In"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the terms of use & privacy policy</p>
                </div>
                {currentState === "Log In"
                    ? <p>Create a new account? <span onClick={() => setCurrentState("Sign Up")}>Click here</span></p>
                    : <p>Already have an account? <span onClick={() => setCurrentState("Log In")}>Login here</span></p>
                }
            </form>
        </div>
    );
};

export default LoginPopUp;
