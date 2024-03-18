import video from '../Assets/video.mp4';

function VideoPlayer() {
	return (
		<div
			className='video'
			dangerouslySetInnerHTML={{
				__html: `
        <video
          loop
          muted
          autoplay
          playsinline
          src="${video}"
        />,
      `,
			}}></div>
	);
}

export default VideoPlayer;
