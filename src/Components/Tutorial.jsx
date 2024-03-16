import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SlideView from './SlideView';
import MusicPlayer from './MusicPlayer';

function Tutorial() {
	return (
		<div className='container'>
			{/* video */}
			<div className='video'>
				<video src='video.mp4' autoPlay loop muted />
			</div>

			{/* overlay video */}
			<div className='overlay' />

			{/* slide */}
			<SlideView />

			{/* music */}
			<MusicPlayer />
		</div>
	);
}

export default Tutorial;
