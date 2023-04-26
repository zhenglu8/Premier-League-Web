import React, {useState} from "react";

export const Login = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Log In</h2>
            <form className = "login-container" onSubmit={handleLogin}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='youremail@email.com' id="email" name="email"></input>
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='********' id="password" name="password"></input>
                <button type="submit">Log In</button>
            </form>
            <button className="link-button" onClick={() => props.onFormSwitch("register")}>Don't have an account? Sign up here</button>
        </div>
    )
}