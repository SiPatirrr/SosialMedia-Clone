import React from "react";
import '../css/Navbar.css';
import { Link } from "react-router-dom";
import IconHome from '../assets/home.png';
import IconAccount from '../assets/accountf.png';
import IconSearch from '../assets/search.png';
import IconMenu from '../assets/menu.png';
import IconMessage from '../assets/messagemodern.png';
import IconNotification from '../assets/notification.png';
import IconReels from '../assets/reels.png';
import IconAdd from '../assets/add.png';

const Navbar = () =>{
    return (
    <nav className="Navbar">
      <ul>
        <li>
            <Link>
                <img src={IconHome} alt="Home" className="Nav-icon" />
            </Link>
        </li>
        <li>
            <Link>
                <img src={IconSearch} alt="Home" className="Nav-icon" />
            </Link>
        </li>
        <li>
            <Link>
                <img src={IconReels} alt="Home" className="Nav-icon" />
            </Link>
        </li>
        <li>
            <Link>
                <img src={IconMessage} alt="Home" className="Nav-icon" />
            </Link>
        </li>
        <li>
            <Link>
                <img src={IconNotification} alt="Home" className="Nav-icon" />
            </Link>
        </li>
        <li>
            <Link>
                <img src={IconAdd} alt="Home" className="Nav-icon" />
            </Link>
        </li>
        <li className="Icon-bottom">
            <Link>
                <img src={IconMenu} alt="Home" className="Nav-icon" />
            </Link>
        </li>
      </ul>
    </nav>
    )
}

export default Navbar
