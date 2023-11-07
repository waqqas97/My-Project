// import { useRef, useState } from "react"
import "./homebanner.scss"
import { useNavigate } from "react-router-dom";

export default function HomeBanner() {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const clickHandler = (e) => {
        e.preventDefault();
        navigate('/login');
    }

    // const emailRef = useRef();
    // const passwordRef = useRef();

    // const handleStart = () => {
    //     setEmail(emailRef.current.value)
    // };
    // const handleFinish = () => {
    //     setPassword(passwordRef.current.value)
    // };
    return (
        <div className="homeBanner">
            <div className="top">
                <div className="wrapper">
                    <img
                        className="logo" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt=""
                    />
                    <button className="loginButton" onClick={clickHandler}>Sign In</button>
                </div>
            </div>
            <div className="container">
                <h1>Unlimited movies, TV shows, and more</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>

                <div className="input">
                    <input type="email" placeholder="email address" />
                    <button className="homeBannerButton" onClick={clickHandler}>Get Started</button>
                </div>
                {/* {!email ? (
                ): (
                        <form className = "input">
                        <input type = "password" placeholder = "password" ref = { passwordRef } />
                <button className="homeBannerButton" onClick={handleFinish}>Start</button>
            </form>
                )} */}
        </div>
        </div >
    )
}
