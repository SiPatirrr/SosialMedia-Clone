import React, { useState } from "react";
import { Link } from "react-router-dom"
import '../css/SignUp.css'
import Swal from "sweetalert2";

const Signup = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [verifypassword, setVerifyPassword] = useState("")

    const Savedata = () => {

        if(password !== verifypassword){
            Swal.fire({
                theme:'bootstrap-5',
                title:'Kesalahan',
                text:'Password Tidak Sama',
                icon:'error',
                confirmButtonText:'Oke'
            })
            return
        }

        const user = {
            username,
            email,
            password,
        }

        localStorage.setItem(
            "user",
            JSON.stringify(user)
        )

        Swal.fire({
                theme:'bootstrap-5',
                title:'Berhasil',
                text:'Akun berhasil Di buat',
                icon:'success',
                confirmButtonText:'Oke'
            })
    }

    return (
        <div className="Container">
            <div className="Box">
            <h1>Daftar Akun</h1>

            <p>Username</p>
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
            <p>Email</p>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
            <p>Password</p>
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
            <p>Verify Password</p>
            <input type="password" placeholder="Verify Password" onChange={(e) => setVerifyPassword(e.target.value)}/>
            <p>Sudah Punya Akun? <Link to="/">Login</Link></p>

            <button onClick={Savedata}>Daftar</button>
            </div>
        </div>
    )
}

export default Signup