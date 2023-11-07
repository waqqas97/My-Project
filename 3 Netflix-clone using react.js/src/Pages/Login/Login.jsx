import { useNavigate } from "react-router-dom";
import "./login.scss"
import { useState } from "react";
import axios from "axios";

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleApi = (e) => {
        e.preventDefault()
        console.log(email, password)
        axios.post('https://academics.newtonschool.co/api/v1/user/login', {
            email: email,
            password: password,
            appType: "ott"
        }, {
            headers: {
                projectId: "7c4wl8v16rqv"
            }
        })
            .then(result => {
                console.log(result);
                alert("Success! Login completed.");
                navigate('/movies')
            })
            .catch(error => {
                console.log(error);
                alert(error?.response?.data?.message);
            });
    }

    const clickHandler = (e) => {
        e.preventDefault();
        navigate('/signup');
    }

    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">
                    <img
                        className="logo" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt=""
                    />
                </div>
            </div>
            <div className="container">
                <form>
                    <h1>Sign In</h1>
                    <input type="email" value={email} onChange={handleEmail} placeholder="Email or phone number" />
                    <input type="password" value={password} onChange={handlePassword} placeholder="Password" />
                    <button className="loginButton" onClick={handleApi} >Sign In</button>
                    <span>
                        New to Netflix? <b onClick={clickHandler}>Sign up now</b>
                    </span>
                    <small>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. 
                        <b> Learn more</b>
                    </small>
                </form>
            </div>
        </div>
    )
}
