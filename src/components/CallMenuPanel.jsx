import React from "react"
import { NavLink } from "react-router-dom"
import SlideShow from "./SlideShow"

export default function CallMenuPanel() {
  const [showDropdown, setShowDropdown] = React.useState(false)

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev)
  }

  return (
    <div className="call-panel-wrapper">
      {/* Section with border-bottom */}
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
                <NavLink to="/">
                  <i className="fa-solid fa-link"></i>
                  Create a meeting for later
                </NavLink>
                <NavLink to="/start-now">
                  <i className="fa-solid fa-plus"></i>
                  Start an instant meeting
                </NavLink>
                <a
                      href="https://calendar.google.com/calendar/u/0/r/eventedit?vcon=meet&dates=now&hl=en&pli=1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-regular fa-calendar"></i>
                      Schedule in Google Calendar
              </a>
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
      <div className="slider-container">
        <SlideShow />
      </div>
    </div>
  )
}
