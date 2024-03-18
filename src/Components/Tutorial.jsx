import React from 'react';
import SlideView from './SlideView';
import MusicPlayer from './MusicPlayer';
import VideoPlayer from './VideoPlayer';

function Tutorial() {
	return (
		<div className='container'>
			{/* video */}
			<VideoPlayer />

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
