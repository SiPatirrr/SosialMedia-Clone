import React from "react";
import '../css/Search.css'
import IconProfile from "../assets/user.png";
import { useState, useEffect, useRef } from "react";

const SearchPage = ({users}) =>{
    // const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("")
    const searchRef = useRef()

        useEffect(() => {
            searchRef.current.focus()
        }, [])

    const filterUser = users.filter((user) => 
        user.name.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className="container-search">
            <div className="search-box">

                <input type="text" placeholder="Cari user..." className="search-input" value={search} onChange={(e) => setSearch(e.target.value)} ref={searchRef}/>

                <button className="search-button">Cari</button>

            </div>
            <div className="container-usercard">
            {
                filterUser.map((user) => (
                <div className="usercard">

                    <img src={IconProfile} alt="Profile" className="usercard-image"/>

                    <div className="user-info">
                        <h4>{user.name}</h4>
                        <p>@{user.username}</p>
                    </div>

                </div>

                ))
            }
            </div>

        </div>
    )
}

export default SearchPage