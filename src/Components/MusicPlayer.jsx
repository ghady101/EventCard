import React, { useState } from 'react';
import { MusicNote, MusicOff } from '@mui/icons-material';

const MusicPlayer = () => {
	const [isMuted, setIsMuted] = useState(false);
	const audioRef = React.createRef();

	const toggleMute = () => {
		setIsMuted(!isMuted);
		audioRef.current.muted = !audioRef.current.muted;
	};
	return (
		<div className='audio'>
			<audio
				style={{ display: 'none' }}
				ref={audioRef}
				src='song.m4a'
				autoPlay
				loop
			/>
			<div onClick={toggleMute}>
				{!isMuted ? (
					<MusicNote
					// sx={{ fontSize: 36 }}
					// className='sound-icon'
					/>
				) : (
					<MusicOff
					// sx={{ fontSize: 36 }}
					// className='sound-icon'
					/>
				)}
			</div>
		</div>
	);
};

export default MusicPlayer;
