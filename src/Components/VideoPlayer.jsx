import video from '../Assets/IMG_6214.MOV';

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
