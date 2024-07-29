import React, { useEffect, useRef, useState } from "react";
import TimelineObserver from "react-timeline-animation";
import Timeline from "../Timeline/Timeline"
import "./WorkProcess.css"

const WorkProcess = () => {
  const [message, setMessage] = useState("");

  const onCallback = () => {
    console.log("awesome");
  };
  return (
    <div className="workprocess">
      <TimelineObserver
        initialColor="#e5e5e5"
        fillColor="black"
        handleObserve={(setObserver) => (
          <Timeline
            callback={onCallback}
            className="timeline"
            setObserver={setObserver}
          />
        )}
      />
      <div className="stub2"></div>
    </div>
  )
}

export default WorkProcess