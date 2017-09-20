import React, { Component } from 'react'
import ArrowUp from 'react-icons/lib/ti/arrow-sorted-up'
import ArrowDown from 'react-icons/lib/ti/arrow-sorted-down'

class VoteScore extends Component {
  render() {
    return (
      <div className='vote-container'>
        <button><ArrowUp size={30} color='grey'/></button>
        <p>{this.props.score}</p>
        <button><ArrowDown size={30} color='grey'/></button>
      </div>
    )
  }
}

export default VoteScore
