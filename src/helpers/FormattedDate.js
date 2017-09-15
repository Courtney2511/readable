import React from 'react'
import moment from 'moment'

export default (props) => {
  const defaultFormat = 'MMMM Do YYYY, h:mm:ss a'
  return (props.date ? <span>{moment(props.date).format(props.format || defaultFormat)}</span> : null)
}
