import React from "react";
import { Link } from "react-router-dom"
import '../css/SignUp.css'

const Signup = () => {
    return (
        <div className="Container">
            <div className="Box">
            <h1>Daftar Akun</h1>

            <p>Username</p>
            <input type="text" placeholder="Username"/>
            <p>Email</p>
            <input type="email" placeholder="Email"/>
            <p>Password</p>
            <input type="password" placeholder="Password"/>
            <p>Verify Password</p>
            <input type="password" placeholder="Verify Password"/>
            <p>Sudah Punya Akun? <Link to="/">Login</Link></p>

            <button>Daftar</button>
            </div>
        </div>
    )
}

export default Signup