import { useRef, useState } from 'react';
import { MusicNote, MusicOff } from '@mui/icons-material';
import song from '../Assets/song.mp3';

const MusicPlayer = () => {
	const [isMuted, setIsMuted] = useState(false);
	const audioRef = useRef(null);

	const toggleMute = () => {
		setIsMuted(!isMuted);
		audioRef.current.muted = !audioRef.current.muted;
	};
	return (
		<div className='audio'>
			<audio ref={audioRef} src={song} autoPlay={true} loop />
			<div onClick={toggleMute}>{isMuted ? <MusicOff /> : <MusicNote />}</div>
		</div>
	);
};

export default MusicPlayer;
