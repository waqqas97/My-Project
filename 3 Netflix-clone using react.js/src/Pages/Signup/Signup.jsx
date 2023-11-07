import { useNavigate } from "react-router-dom";
import axios from "axios"
import "./signup.scss"
import { useState } from "react";

export default function Signup() {
    const navigate = useNavigate();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleName = (event) => {
        setName(event.target.value)
    }
    const handleEmail = (event) => {
        setEmail(event.target.value)
    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleApi = (e) => {
        e.preventDefault()
        console.log(name, email, password)
        axios.post('https://academics.newtonschool.co/api/v1/user/signup', {
            name: name,
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
                alert("Success! Registration completed.");
                navigate('/login')
            })
            .catch(error => {
                console.log(error);
                alert(error?.response?.data?.message);
            });
    }

    const clickHandler = (e) => {
        e.preventDefault();
        navigate('/login');
    }
    return (
        <div className="signup">
            <div className="top">
                <div className="wrapper">
                    <img
                        className="logo" style={{cursor:"pointer"}} src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt=""
                    />
                </div>
            </div>
            <div className="container">
                <form>
                    <h1>Sign Up</h1>
                    <input type="text" onChange={handleName} placeholder="Your Name" />
                    <input type="email" value={email} onChange={handleEmail} placeholder="Email or phone number" />
                    <input type="password" value={password} onChange={handlePassword} placeholder="Password" />
                    <button onClick={handleApi} className="signupButton">Sign Up</button>
                    <span>
                        Existing User ? <b onClick={clickHandler}>Sign In now</b>
                    </span>
                    <small>
                        By creating an account, you agree to Netflix
                        <b> Conditions of Use </b>and<b> Privacy Notice.</b>
                    </small>
                </form>
            </div>
        </div>
    )
}
