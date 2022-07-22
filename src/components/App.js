import video from "../data/video.js";
import Comment from './Comment';
import CommentSection from './CommentSection';
import NavBar from './NavBar';
import VideoContent from './VideoContent';
import { useState } from 'react';

function App() {
  const [showComments, setShowComments] = useState(true);

  const toggleShowComments = () => {
    setShowComments( showComments => !showComments )
  }

  const renderCommentSection = () => {
    if(showComments) {
      return <CommentSection comments={video.comments } />
    }
  }

  return (
    <div className="App">
      <VideoContent key={ video.id } video={ video } />
      <button onClick={ toggleShowComments }>
        { showComments ? 'Hide Comments' : 'Show Comments' }
      </button>
      { renderCommentSection() }
    </div>
  );
}

export default App;
