import { AccessTimeFilled, LocationOn } from '@mui/icons-material';

function Party() {
	return (
		<div className='partyContent'>
			<h1 className='title  titlee' style={{ marginBottom: '0.5em' }}>
				Let&apos;s party!
			</h1>
			<AccessTimeFilled
				style={{ marginBottom: '0.2em' }}
				sx={{ fontSize: 36 }}
			/>
			<h3 className='text textt' style={{ marginBottom: '1.5em' }}>
				After Ceremony
				<br />
				8:00 PM
			</h3>
			<LocationOn sx={{ fontSize: 36 }} style={{ marginBottom: '0.2em' }} />
			<h3 className='text' style={{ marginBottom: '0.4em' }}>
				Life Venue
				<br />
				Jiyeh
			</h3>
			<button
				className='btnLocation'
				onClick={() =>
					window.open('https://maps.app.goo.gl/x4KAzG835GQdVbH27', '_blank')
				}>
				location Map
			</button>
		</div>
	);
}

export default Party;
