import React from "react"
import { NavLink, Navigate } from "react-router-dom"
import SlideShow from "./SlideShow"

export default function CallMenuPanel() {
  const [showDropdown, setShowDropdown] = React.useState(false)
  const [password, setPassword] = React.useState("")
  const [redirect, setRedirect] = React.useState(false)
  const [error, setError] = React.useState("")

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (password === "1234") {
      setRedirect(true)
      setError("")
    } else {
      setError("Invalid code or link. Please try again.")
    }
  }

  function handleChange(e) {
    const { value } = e.target
    setPassword(value)
    if (error) setError("") 
  }

  return (
    <>
      {redirect && <Navigate to="/meeting" />}
      <div className="call-panel-wrapper">
        <section className="CallMenuPanel-section">
          <h1>Video calls and meetings for everyone</h1>
          <p>
            Connect, collaborate, and celebrate from anywhere with Google Meet
          </p>

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

            <form className="join-input-group" onSubmit={handleSubmit}>
              <div className="join-box">
                <i className="fa-solid fa-keyboard"></i>
                <input
                  type="text"
                  value={password}
                  placeholder="Enter a code or link"
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="join-link">
                Join
              </button>
            </form>
          </div>
          {error && (
            <div className="error-message">
              <i className="fa-solid fa-xmark"></i>
              {error}
            </div>
          )}
        </section>

        <div className="slider-container">
          <SlideShow />
        </div>
      </div>
    </>
  )
}
