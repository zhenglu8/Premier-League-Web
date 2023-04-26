import React, {useState} from "react";

export const Register = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setname] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Sign Up</h2>
            <form className = "register-container" onSubmit={handleLogin}>
                <label htmlFor="name">Full Name</label>
                <input value={name} type="name" placeholder='full name' id="name" name="name"></input>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='youremail@email.com' id="email" name="email"></input>
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='********' id="password" name="password"></input>
                <button type="submit">Sign Up</button>
            </form>
            <button className="link-button" onClick={() => props.onFormSwitch("login")}>Already have an account? Log in here</button>
        </div>
    )
}