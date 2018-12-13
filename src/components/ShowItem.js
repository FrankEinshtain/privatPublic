import React from 'react'

const ShowItem = props => {
  return (
    <div className='card'>
      <div className='content'>
        <div className='header'>{props.place}</div>
        <div className='description'>{props.adr}</div>
      </div>
    </div>
  )
}

export default ShowItem
