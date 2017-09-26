import React, { Component } from 'react'
import ArrowUp from 'react-icons/lib/ti/arrow-sorted-up'
import ArrowDown from 'react-icons/lib/ti/arrow-sorted-down'
import PropTypes from 'prop-types'


class VoteScore extends Component {
  render() {
    console.log('VoteScore props:', this.props)
    return (
      <div className='vote-container'>
        <button onClick={() => this.props.upVote(this.props.id)}><ArrowUp size={30} color='grey'/></button>
        <p>{this.props.score}</p>
        <button onClick={() => this.props.downVote(this.props.id)}><ArrowDown size={30} color='grey'/></button>
      </div>
    )
  }
}

VoteScore.PropTypes = {
  id: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired
}

export default VoteScore
