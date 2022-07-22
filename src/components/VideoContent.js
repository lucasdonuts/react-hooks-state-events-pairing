import { useState, React } from 'react';
import Video from './Video';

const VideoContent = ( props ) => {
  const { title, embedUrl, views, createdAt, upvotes, downvotes, comments } = props.video;
  const [upvoteCount, setUpvoteCount] = useState(upvotes);
  const [downvoteCount, setDownvoteCount] = useState(downvotes);

  const handleVote = (e) => {
    e.target.name === 'upvote'
      ? setUpvoteCount( prevCount => prevCount + 1)
      : setDownvoteCount( prevCount => prevCount + 1)
  }
  
  return (
    <div id='video-container' class='container'>
      <Video src={ embedUrl } />
      <h2>{ title }</h2>
      <p>
        { views } Views | Uploaded { createdAt }
      </p>
      <span id="vote-buttons">
        <button name="upvote" onClick={ handleVote }>{ upvoteCount }👍</button>
        <button name="downvote" onClick={ handleVote }>{ downvoteCount } 👎</button>
      </span>
    </div>
  )
}

export default VideoContent;

// const video = {
//   id: 1,
//   title: "React Today and Tomorrow and 90% Cleaner React With Hooks",
//   embedUrl: "https://www.youtube.com/embed/dpw9EHDh2bM",
//   views: 730707,
//   createdAt: "Oct 26, 2018",
//   upvotes: 9210,
//   downvotes: 185,
//   comments: [
//     {
//       id: 1,
//       user: "duanebot",
//       comment: "first!",
//     },
//     {
//       id: 2,
//       user: "gaeron",
//       comment: "What a great tutorial!",
//     },
//   ],
// };