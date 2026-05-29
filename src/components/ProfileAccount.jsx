import React, { useContext } from "react";
import '../css/ProfileAccount.css';
import IconProfile from "../assets/user.png";
import { AuthContext } from "../context/AuthContext";

const ProfileAccount = () => {

    const { loginUser } = useContext(AuthContext);

    return (
        <div className="container-profile">
            <div className="profile-user">
                <img src={IconProfile} alt="Profile" />
                <p>{loginUser ? loginUser.username : "Guest"}</p>
            </div>
        </div>
    );
};

export default ProfileAccount;