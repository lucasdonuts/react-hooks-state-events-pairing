import React from 'react';

const Comment = ({ user, comment }) => {
  return (
    <div class='comment'>
      <h3 class='user'>{ user }</h3>
      <p class='comment-text'>{ comment }</p>
    </div>
  )
}

export default Comment;