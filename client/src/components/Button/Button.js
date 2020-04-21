import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

const Button = ({ type, position, label }) => (
  <button type={type} className={position}>
    {label}
  </button>
)

Button.defaultProps = {
  type: 'button',
  position: ''
}

Button.propTypes = {
  type: PropTypes.string,
  position: PropTypes.string,
  label: PropTypes.string.isRequired
}

export default Button
