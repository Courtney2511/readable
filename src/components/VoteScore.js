import React, { Component } from 'react'
import ArrowUp from 'react-icons/lib/ti/arrow-sorted-up'
import ArrowDown from 'react-icons/lib/ti/arrow-sorted-down'

class VoteScore extends Component {
  render() {
    return (
      <div>
        <button><ArrowUp size={30} /></button>
        <p>{this.props.score}</p>
        <button><ArrowDown size={30}/></button>
      </div>
    )
  }
}

export default VoteScore
