import React from "react"
import logo from "../assets/images/logo.png";
import useCurrentDateTime from "../hooks/useCurrentDateTime";
export default function Header(){
    const clock = useCurrentDateTime()

    return (
       <nav>
            <div>
                <img src={logo} alt="logo image" />
            </div>
            <div className="icons">
                <span className="date-and-time">{clock}</span>
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