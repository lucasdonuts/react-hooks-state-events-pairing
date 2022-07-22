import { useState, React } from 'react';
import Comment from './Comment';

const CommentSection = ({ comments }) => {

  const displayComments = () => {
    return comments.map( comment => {
      return (
        <Comment
        key={ comment.id }
        user={ comment.user }
        comment={ comment.comment }
        />
      )
    })
  }

  return (
    <>
      <hr></hr>
      <div id='comment-section'>
        { displayComments() }
      </div>
    </>
  )
}

export default CommentSection;