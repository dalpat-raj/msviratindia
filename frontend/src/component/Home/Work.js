import React from 'react'
import "./work.scss";

const Work = () => {
  return (
    <div className="work__flex">
        <div className="work__image">
            <img src="/g1.jpg" alt="g1" />
        </div>
        <div className="work__image">
            <img src="/g2.jpg" alt="g2" />
        </div>
        <div className="work__image">
            <img src="/g3.jpg" alt="g3" />
        </div>
        <div className="work__image">
            <img src="/g4.jpg" alt="g4" />
        </div>
        <div className="work__image">
            <img src="/g5.jpg" alt="g5" />
        </div>
    </div>
  )
}

export default Work