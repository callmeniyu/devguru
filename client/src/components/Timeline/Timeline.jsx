import React, { useEffect, useRef, useState } from "react"
import { fireConfetti } from "./confetti"
import "./Timeline.css"

const Timeline = ({ setObserver, callback }) => {
    const [message1, setMessage1] = useState("")
    const [message2, setMessage2] = useState("")
    const [message3, setMessage3] = useState("")

    const timeline1 = useRef(null)
    const timeline2 = useRef(null)
    const timeline3 = useRef(null)
    const timeline4 = useRef(null)
    const timeline5 = useRef(null)
    const timeline6 = useRef(null)
    const timeline7 = useRef(null)
    const circle1 = useRef(null)
    const circle2 = useRef(null)
    const circle3 = useRef(null)
    const circle4 = useRef(null)
    const circle5 = useRef(null)
    const circle6 = useRef(null)
    const circle7 = useRef(null)

    const someCallback = () => {
        setMessage1("Step one")
        callback()
    }

    const someCallback2 = () => {
        setMessage2("Step two")
    }

    const someCallback3 = () => {
        setMessage2("Step three")

    }
    const someCallback4 = () => {
        setMessage2("Step four")

    }
    const someCallback5 = () => {
        setMessage2("Step five")
    }
    const someCallback6 = () => {
        setMessage2("Step six")

    }
    const someCallback7 = () => {
        setMessage2("Step seven")
        fireConfetti()

    }

    useEffect(() => {
        setObserver(timeline1.current)
        setObserver(timeline2.current)
        setObserver(timeline3.current)
        setObserver(timeline4.current)
        setObserver(timeline5.current)
        setObserver(timeline6.current)
        setObserver(timeline7.current)
        setObserver(circle1.current, someCallback)
        setObserver(circle2.current, someCallback2)
        setObserver(circle3.current, someCallback3)
        setObserver(circle4.current, someCallback4)
        setObserver(circle5.current, someCallback5)
        setObserver(circle6.current, someCallback6)
        setObserver(circle7.current, someCallback7)
    }, [])

    return (
        <div className="wrapper">
            <div id="timeline1" ref={timeline1} className="timeline" />
            <div className="circleWrapper">
                <div id="circle1" ref={circle1} className="circle">
                    1
                </div>
                <div className="message workprocess-step workprocess-step-r">
                    <div className="workprocess-step-left">01</div>
                    <div className="workprocess-step-right">
                        <h3>Requirements gathering</h3>
                        <p>We collaborate with you to gather and to understand your business needs and objectives</p>
                    </div>
                </div>
            </div>
            <div id="timeline2" ref={timeline2} className="timeline" />
            <div className="circleWrapper">
                <div id="circle2" ref={circle2} className="circle">
                    2
                </div>
                <div className="message workprocess-step workprocess-step-l">
                    <div className="workprocess-step-left">02</div>
                    <div className="workprocess-step-right">
                        <h3>Iterative planning</h3>
                        <p>We conduct iterative planning to adapt emerging requirements and feedback</p>
                    </div>
                </div>
            </div>
            <div id="timeline3" ref={timeline3} className="timeline" />
            <div className="circleWrapper">
                <div id="circle3" ref={circle3} className="circle">
                    3
                </div>
                <div className="message workprocess-step workprocess-step-r">
                    <div className="workprocess-step-left">03</div>
                    <div className="workprocess-step-right">
                        <h3>Design and Prototyping</h3>
                        <p>We design interactive mockups and prototypes to validate functionality ensuring your involvement and feedback throughout.</p>
                    </div>
                </div>
            </div>
            <div id="timeline4" ref={timeline4} className="timeline" />
            <div className="circleWrapper">
                <div id="circle4" ref={circle4} className="circle">
                    4
                </div>
                <div className="message workprocess-step workprocess-step-l">
                    <div className="workprocess-step-left">04</div>
                    <div className="workprocess-step-right">
                        <h3>Design and Prototyping</h3>
                        <p>We design interactive mockups and prototypes to validate functionality ensuring your involvement and feedback throughout.</p>
                    </div>
                </div>
            </div>
            <div id="timeline5" ref={timeline5} className="timeline" />
            <div className="circleWrapper">
                <div id="circle5" ref={circle5} className="circle">
                    5
                </div>
                <div className="message workprocess-step workprocess-step-r">
                    <div className="workprocess-step-left">05</div>
                    <div className="workprocess-step-right">
                        <h3>Continuous testing</h3>
                        <p>Testing is a part of every sprint. Every increment undergous rigorous testing to ensure quality.</p>
                    </div>
                </div>
            </div>
            <div id="timeline6" ref={timeline6} className="timeline" />
            <div className="circleWrapper">
                <div id="circle6" ref={circle6} className="circle">
                    6
                </div>
                <div className="message workprocess-step workprocess-step-l">
                    <div className="workprocess-step-left">06</div>
                    <div className="workprocess-step-right">
                        <h3>Continuous testing</h3>
                        <p>Testing is a part of every sprint. Every increment undergous rigorous testing to ensure quality.</p>
                    </div>
                </div>
            </div>
            <div id="timeline7" ref={timeline7} className="timeline" />
            <div className="circleWrapper">
                <div id="circle7" ref={circle7} className="circle">
                    7
                </div>
                <div className="message workprocess-step workprocess-step-r">
                    <div className="workprocess-step-left">07</div>
                    <div className="workprocess-step-right">
                        <h3>Done!</h3>
                        <p>Your projects are in your hands!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timeline
