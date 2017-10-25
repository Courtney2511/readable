import React, { Component } from 'react'
import ArrowUp from 'react-icons/lib/ti/arrow-sorted-up'
import ArrowDown from 'react-icons/lib/ti/arrow-sorted-down'
import PropTypes from 'prop-types'


class VoteScore extends Component {
  render() {
    const { upVote, downVote, id, score } = this.props
    return (
      <div className='vote-container'>
        <button onClick={ () => upVote(id) }><ArrowUp size={30} color='#FFC107'/></button>
        <p>{ score }</p>
        <button onClick={ () => downVote(id) }><ArrowDown size={30} color='#FFC107'/></button>
      </div>
    )
  }
}

VoteScore.propTypes = {
  id: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired
}

export default VoteScore
