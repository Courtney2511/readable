import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getComment, editComment } from '../actions/comments'
import EditCommentForm from '../components/EditCommentForm'

class EditCommentContainer extends Component {
  componentDidMount() {
    this.props.getComment(this.props.match.params.commentId)
  }
  render() {
    const { comment, editComment } = this.props
    return (
      <EditCommentForm comment={ comment } editComment={ editComment }/>
    )
  }
}

function mapStateToProps(state) {
  return {
    comment: state.comments.comment
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getComment: (id) => dispatch(getComment(id)),
    editComment: (id, values) => dispatch(editComment(id, values))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCommentContainer)
