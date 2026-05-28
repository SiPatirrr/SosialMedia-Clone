import React, { useState, useEffect } from "react";
import '../css/Home.css';
import Navbar from "./Navbar";
import PostCard from "./PostCard";
import SearchPage from "./Search";

const Home = () =>{
    const [users, setUsers] = useState([]);
    
        useEffect(() => {
            fetch("https://jsonplaceholder.typicode.com/users")
                .then((response) => response.json())
                .then((data) => {
                    const NewData = data.map((user) => ({
                        ...user,
                        likes: 0,
                        comment: 0
                    }))
                    setUsers(NewData);
                })
                .catch((error) => {
                    console.log(error);
                });
        }, []);

    return (
        <div className="Container-home">
            <Navbar />
            <SearchPage users={users} />
            <div className="page">
            <PostCard users={users} setUsers={setUsers} />
            </div>
        </div>
    )
}

export default Home
