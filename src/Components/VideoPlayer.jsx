import video from '../Assets/video.MOV';
// import video from '../Assets/video.mp4';

function VideoPlayer() {
	return (
		// 	<div
		// 		className='video'
		// 		dangerouslySetInnerHTML={{
		// 			__html: `
		//     <video
		//       loop
		//       muted
		//       autoplay
		//       playsinline
		//       src="${video}"
		//     />,
		//   `,
		// }}></div>
		<video loop muted autoplay playsinline>
			<source src='../Assets/video.mp4' type='video/mp4' />
		</video>
	);
}

export default VideoPlayer;
