import SlideView from './Components/SlideView';
import VideoPlayer from './Components/VideoPlayer';
import MusicPlayer from './Components/MusicPlayer';
import './App.css';

function App() {
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

export default App;
