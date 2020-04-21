import React from 'react'
import './DetailsLayout.css'

const DetailsLayout = ({ image, fullName, title, description, buttons }) => {
  return (
    <div className="wrapper">
      <div className="header-row">
        <div className="header-col">
          <div className="photo-container">{image}</div>
        </div>
        <div className="header-col">
          <div>
            <p className="name">{fullName}</p>
            <p className="title">{title}</p>
          </div>
        </div>
      </div>
      <div className="info-row">
        <h3>Description</h3>
        {description}
      </div>
      {buttons}
    </div>
  )
}

export default DetailsLayout
