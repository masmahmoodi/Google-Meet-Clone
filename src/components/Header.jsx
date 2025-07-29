import React from "react"
import logo from "../assets/images/logo.png";
export default function Header(){
    return (
       <nav>
            <div>
                <img src={logo} alt="logo image" />
            </div>
            <div className="icons">
                <span className="date-and-time">138PM.Sat.Jul 26</span>
                <i className="fa-regular fa-circle-question"></i>
                <i class="fa-solid fa-circle-xmark"></i>
                <i class="fa-solid fa-gear"></i>
                <div className="account-and-apps">
                    <i class="fa-solid fa-bars"></i>
                    <i class="fa-solid fa-user"></i>
                </div>
            </div>
       </nav>
    )
}