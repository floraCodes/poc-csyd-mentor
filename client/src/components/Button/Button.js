import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

const Button = ({ type, position, label, onClick }) => (
  <button type={type} className={position} onClick={onClick}>
    {label}
  </button>
)

Button.defaultProps = {
  type: 'button',
  position: '',
  onClick: ()=>{}
}

Button.propTypes = {
  type: PropTypes.string,
  position: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

export default Button
