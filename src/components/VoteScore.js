import React, { Component } from 'react'
import ArrowUp from 'react-icons/lib/ti/arrow-sorted-up'
import ArrowDown from 'react-icons/lib/ti/arrow-sorted-down'

class VoteScore extends Component {
  render() {
    return (
      <div>
        <ArrowUp size={30} />
        <p>{this.props.score}</p>
        <ArrowDown size={30}/>
      </div>
    )
  }
}

export default VoteScore
