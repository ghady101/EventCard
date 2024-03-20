import { AccessTimeFilled, LocationOn } from '@mui/icons-material';

function Ceremony() {
	return (
		<div className='ceremonyContent'>
			<h1 className='title' style={{ marginBottom: '0.5em' }}>
				Wedding Ceremony
			</h1>
			<AccessTimeFilled
				sx={{ fontSize: 36 }}
				style={{ marginBottom: '0.2em' }}
			/>
			<h3 className='text' style={{ marginBottom: '1.5em' }}>
				Saturday, July 06, 2024
				<br />
				6:00 PM
			</h3>
			<LocationOn sx={{ fontSize: 36 }} style={{ marginBottom: '0.2em' }} />
			<h3 className='text' style={{ marginBottom: '0.4em' }}>
				Saydet El Bechara Church
				<br />
				Darb El Sim
			</h3>
			<button
				className='btnLocation'
				onClick={() =>
					window.open('https://maps.app.goo.gl/7HPpm3Dk5p2ZryP76', '_blank')
				}>
				location Map
			</button>
		</div>
	);
}

export default Ceremony;
