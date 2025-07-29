import React from "react"
import firstImg from "../assets/images/first.gif"
import secondImg from "../assets/images/second.gif"
import thirdImg from "../assets/images/third.gif"
import fourthImg from "../assets/images/fourth.gif"
import fifthImg from "../assets/images/fifth.gif"
import sixthImg from "../assets/images/sixth.svg"
import seventhImg from "../assets/images/seventh.svg"
import ninethImg from "../assets/images/nineth.svg"

export default function SlideShow() {
  const slides = [
    {
      src: firstImg,
      title: "Welcome to Meet Clone",
      description: "Start secure, high-quality video calls with just one click.",
    },
    {
      src: secondImg,
      title: "Easy Collaboration",
      description: "Share your screen, chat, and collaborate in real-time.",
    },
    {
      src: thirdImg,
      title: "Join from Anywhere",
      description: "Whether on desktop or mobile, join meetings instantly.",
    },
    {
      src: fourthImg,
      title: "Reliable Connection",
      description: "Enjoy smooth video and audio without interruptions.",
    },
    {
      src: fifthImg,
      title: "Invite Instantly",
      description: "Send meeting links and invite anyone with a simple link.",
    },
    {
      src: sixthImg,
      title: "Privacy First",
      description: "We protect your conversations with encryption.",
    },
    {
      src: seventhImg,
      title: "Integrated Chat",
      description: "Use real-time chat during calls to stay organized.",
    },
    {
      src: ninethImg,
      title: "Future Ready",
      description: "Designed for tomorrow's hybrid teams and classrooms.",
    },
  ]

  const [currentIndex, setCurrentIndex] = React.useState(0)
  function next() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
  }

  function prev() {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)
  }

  const dottedButton = slides.map((_, index) => (
    <button
      key={index}
      onClick={() => setCurrentIndex(index)}
      className={currentIndex === index ? "dot active" : "dot"}
    ></button>
  ))

  return (
  <div className="slide-show-wrapper">
    <div className="slider-container">
      <div className="slide-show">
        <button onClick={prev} className="nav-btn left-btn">
          <i className="fa-solid fa-chevron-left"></i>
        </button>

        <img src={slides[currentIndex].src} alt="slide" />

        <button onClick={next} className="nav-btn right-btn">
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>

      <div className="slide-show-content">
        <h2 className="slide-show-title">{slides[currentIndex].title}</h2>
        <p className="slide-show-description">{slides[currentIndex].description}</p>
        <button className="slide-show-btn">Start trial</button>

        <div className="dots-wrapper">{dottedButton}</div>
      </div>
    </div>
  </div>  
  )
}
