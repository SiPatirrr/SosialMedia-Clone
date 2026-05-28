import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import Swal from "sweetalert2";
import '../css/Login.css'
import 'sweetalert2/themes/bootstrap-5.css'

const LoginPage = () => {
    const navigate = useNavigate()
    const data = localStorage.getItem("user");
    const user = JSON.parse(data)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const login = () => {
        if (username === "" && password === ""){
            Swal.fire({
                theme:'bootstrap-5',
                title:'Kesalahan',
                text:'Harap Isi Username Dan Password',
                icon:'error',
                confirmButtonText:'Oke'
            })
        } else if((username === user.username || username === user.email) && password === user.password) {
            navigate("/home")
            
        }else{
            Swal.fire({
                theme:'bootstrap-5',
                title:'Kesalahan',
                text:'Username atau Password Salah',
                icon:'error',
                confirmButtonText:'Oke'
            })

        }
    }

    return (
        <div className="Container">
            <div className="Box">
            <h1>Masuk</h1>

            <p>Username or Email</p>
            <input type="text" placeholder="Username or Email" onChange={(e) => setUsername(e.target.value)}/>
            <p>Password</p>
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
            <p>Belum Punya Akun? <Link to="/signup">Daftar</Link></p>

            <button onClick={login}>Masuk</button>
            </div>
        </div>
    )
}

export default LoginPage