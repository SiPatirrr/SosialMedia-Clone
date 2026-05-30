import React, { useState, useEffect } from "react";
import '../css/Home.css';
import Navbar from "./Navbar";
import PostCard from "./PostCard";
import SearchPage from "./Search";
import ProfileAccount from "./ProfileAccount";

const Home = () =>{
    const [users, setUsers] = useState([]);
    const [loginUser, setLoginUser] = useState(null)
    const [openSearch, setOpenSearch] = useState(false)
    
        useEffect(() => {
            fetch("https://jsonplaceholder.typicode.com/users")
                .then((response) => response.json())
                .then((data) => {
                    const NewData = data.map((user) => ({
                        ...user,
                        likes: 0,
                        comment: 0,
                        liked: false
                    }))
                    setUsers(NewData);
                })
                .catch((error) => {
                    console.log(error);
                });
        }, []);

        useEffect(() => {
            const data = localStorage.getItem("loginUser")

            if (data) {
                setLoginUser(JSON.parse(data))
            }

        }, [])

    return (
        <div className="Container-home">
            <Navbar setOpenSearch={setOpenSearch} />
            {
                openSearch && <SearchPage users={users} />
            }
            <div className="page">
            <PostCard users={users} setUsers={setUsers} />
            </div>
            <ProfileAccount loginUser={loginUser} />
        </div>
    )
}

export default Home
