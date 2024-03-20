import { useRef, useState } from 'react';
import { MusicNote, MusicOff } from '@mui/icons-material';
import song from '../Assets/song.mp3';

const MusicPlayer = () => {
	const [isMuted, setIsMuted] = useState(true);
	const audioRef = useRef(null);

	const toggleMute = () => {
		setIsMuted(!isMuted);
		// audioRef.current.muted = !audioRef.current.muted;
		audioRef.current.play();
	};

	return (
		<div className='audio'>
			<audio ref={audioRef} autoPlay loop muted={isMuted}>
				<source src={song} type='audio/mp3' />
			</audio>
			<div onClick={toggleMute}>{!isMuted ? <MusicNote /> : <MusicOff />}</div>
		</div>
	);
};

export default MusicPlayer;
