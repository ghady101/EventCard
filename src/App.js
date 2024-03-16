import { createRef, useState } from 'react';
import './App.css';

import SlideView from './Components/SlideView';
import Tutorial from './Components/Tutorial';

function App() {
	const [isMuted, setIsMuted] = useState(false);
	const audioRef = createRef();

	const toggleMute = () => {
		setIsMuted(!isMuted);
		audioRef.current.muted = !audioRef.current.muted;
	};

	return (
		// <div className='main'>
		// 	<div className='overlay'></div>

		// 	<video src={video} autoPlay loop muted />

		// 	{/* <div className='audio'>
		// 		<audio ref={audioRef} src={audio} autoPlay loop />
		// 		<div onClick={toggleMute}>
		// 			{!isMuted ? (
		// 				<MusicNote className='sound-icon' />
		// 			) : (
		// 				<MusicOff className='sound-icon' />
		// 			)}
		// 		</div>
		// 	</div> */}
		// 	{/* <Intro /> */}
		// 	{/* <Date /> */}
		// 	{/* <Ceremony /> */}
		// 	<Party />
		// </div>
		<Tutorial />
	);
}

export default App;
