import React from "react";
import "./ProgressDots.scss"

export interface ProgressDotsProps {
    steps: number,
    current: number,
}

interface ProgressDotProps {
    complete: boolean
}

const ProgressDot: React.FC<ProgressDotProps> = ({complete}) => {
    return (
        <div className={complete ? "dot dot-filled" : "dot"} />
    )
}

const ProgressDots: React.FC<ProgressDotsProps> = ({current, steps}) => {
    return (
        <div className="progress-dots">
           {
            Array(steps).fill(0).map((_, i) => <ProgressDot complete={i < current} />)
           } 
        </div>
    )
}

export default ProgressDots;