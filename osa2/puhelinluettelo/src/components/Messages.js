import React from 'react'
import '../css/Messages.css'

const SuccessMessage = ({message}) => (
  <p className="success">{message}</p>
)

const ErrorMessage = ({message}) => (
  <p className="error">{message}</p>
)

export { SuccessMessage, ErrorMessage }
