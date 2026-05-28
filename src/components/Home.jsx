import React from "react";
import '../css/Home.css';
import Navbar from "./Navbar";
import PostCard from "./PostCard";

const Home = () =>{
    return (
        <div className="Container-home">
            <Navbar />
            <div className="page">
            <PostCard />
            </div>
        </div>
    )
}

export default Home
