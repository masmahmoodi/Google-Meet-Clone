import React, { useState } from "react"
import { NavLink } from "react-router-dom"

export default function CallMenuPanel() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev)
  }

  return (
    <section className="CallMenuPanel-section">
      <h1>Video calls and meetings for everyone</h1>
      <p>Connect, collaborate, and celebrate from anywhere with Google Meet</p>

      <div className="action-row">
        <div className="menu-wrapper">
          <button className="new-meeting-btn" onClick={toggleDropdown}>
            <i className="fa-solid fa-video"></i>
            <span>New meeting</span>
          </button>

          {showDropdown && (
            <div className="dropdown-menu">
              <NavLink to="/create-later">
                <i className="fa-solid fa-link"></i>
                Create a meeting for later
              </NavLink>
              <NavLink to="/start-now">
                <i className="fa-solid fa-plus"></i>
                Start an instant meeting
              </NavLink>
              <NavLink to="/schedule">
                <i className="fa-regular fa-calendar"></i>
                Schedule in Google Calendar
              </NavLink>
            </div>
          )}
        </div>

        <div className="join-input-group">
          <div className="join-box">
            <i className="fa-solid fa-keyboard"></i>
            <input type="text" placeholder="Enter a code or link" />
          </div>
          <NavLink to="/" className="join-link">Join</NavLink>
        </div>
      </div>
    </section>
  )
}
