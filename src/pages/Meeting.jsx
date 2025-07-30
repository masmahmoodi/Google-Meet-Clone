import React from "react"
import useCurrentDateTime from "../hooks/useCurrentDateTime"
export default function Meeting() {
  const persons = [
    {
      name: "Mr.D",
      image:
        "https://thumbs.dreamstime.com/z/intense-lighthearted-cartoon-zebra-white-background-cartoon-zebra-rendered-maya-photorealistic-details-stands-299355522.jpg?w=576",
      isAdmin: true,
    },
    {
      name: "Ms.T",
      image:
        "https://img.freepik.com/premium-photo/realistic-stylized-alien-cartoon-character-xbox-360-graphics_899449-338805.jpg",
      isAdmin: false,
    },
    {
      name: "Mr.I",
      image:
        "https://thumbs.dreamstime.com/b/realistic-female-cartoon-character-shorts-humble-charm-d-stands-alone-exuding-cartoonish-innocence-xbox-graphics-300849196.jpg",
      isAdmin: false,
    },
  ]

  const [micOn, setMicOn] = React.useState(false)
  const [videoOn, setVideoOn] = React.useState(false)
  const [callOn, setCallOn] = React.useState(false)
  const clock = useCurrentDateTime()
  const personsToDisplay = persons.map((person, index) => (
    <div key={index} className="person">
      <i className="fa-solid fa-microphone-slash top-right-icon"></i>
      <div className="img-wrapper">
        <img src={person.image} alt={person.name} />
        <div className="hover-icons">
          <i className="fa-solid fa-thumbtack"></i>
          <i className="fa-solid fa-microphone-slash"></i>
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </div>
      </div>
      <p>{person.name}</p>
    </div>
  ))

  return (
    <>
      <div className="person-container">{personsToDisplay}</div>

      <div className="bottom-bar">
        <div className="meeting-info">
          <span>{clock}</span>
          <span>|</span>
          <span>1234</span>
        </div>

        <div className="control-icons center-controls">
          <i
            className={`fa-solid ${
              micOn ? "fa-microphone" : "fa-microphone-slash"
            } ${!micOn ? "active-control" : ""}`}
            onClick={() => setMicOn(!micOn)}
          ></i>

          <i
            className={`fa-solid ${
              videoOn ? "fa-video" : "fa-video-slash"
            } ${!videoOn ? "active-control" : ""}`}
            onClick={() => setVideoOn(!videoOn)}
          ></i>

          <i className="fa-solid fa-closed-captioning"></i>
          <i className="fa-solid fa-desktop"></i>
          <i className="fa-solid fa-hand"></i>
          <i className="fa-solid fa-ellipsis-vertical"></i>

          <i
            className={`fa-solid ${
              callOn ? "fa-phone" : "fa-phone-slash"
            } ${!callOn ? "end-call" : "call-on"}`}
            onClick={() => setCallOn(!callOn)}
          ></i>
        </div>

        <div className="side-icons">
          <i className="fa-solid fa-circle-info"></i>
          <i className="fa-solid fa-user-group"></i>
          <i className="fa-solid fa-message"></i>
        </div>
      </div>
    </>
  )
}
