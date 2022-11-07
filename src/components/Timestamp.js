import React from 'react'

function Timestamp(props) {
  return (
    <div>
    <span className="timestamp">{props.timeStampData.timestamp}</span>
    </div>
  )
}

export default Timestamp