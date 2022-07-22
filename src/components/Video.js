import React from 'react';

const Video = ({ src }) => {
  return (
    <div>
      <iframe
        width="894"
        height="503"
        src={ src }
        frameborder="0"
        allowfullscreen
      >
      </iframe>
    </div>
  )
}

export default Video;