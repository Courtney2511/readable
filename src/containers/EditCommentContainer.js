import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getComment, editComment, clearComment } from '../actions/comments'
import EditCommentForm from '../components/EditCommentForm'

class EditCommentContainer extends Component {
  componentDidMount() {
    // const com = this.props.getComment(this.props.match.params.commentId)
    // console.log(com)
  }
  render() {
    const { comment, editComment, clearComment } = this.props
    return (
      (comment)
      ? <EditCommentForm comment={ comment } editComment={ editComment } clearComment= { clearComment }/>
      : null
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
    editComment: (id, values) => dispatch(editComment(id, values)),
    clearComment: () => dispatch(clearComment())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCommentContainer)
