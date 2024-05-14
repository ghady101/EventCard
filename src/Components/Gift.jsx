import React from 'react';

function Gift() {
	return (
		<div className='giftContent'>
			<h1 className='title' style={{ marginBottom: '.9em' }}>
				Gift Registry
			</h1>
			<h3 className='text' style={{ margin: '24px', lineHeight: '1.2em' }}>
				Your love, laughter and company are all we could wish for on our special
				day. However, if you would like to honor us with a gift, a registry is
				held at whish money
				<br />
				<br />
				<span style={{ fontWeight: '900' }}>Account:</span> 20832780
				<br />
				<br />
			</h3>
			<span style={{ fontWeight: '900' }}>
				Kindly confirm before{' '}
				<i>
					<b>20th of June</b>
				</i>
			</span>
		</div>
	);
}

export default Gift;
