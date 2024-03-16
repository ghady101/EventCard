import React from 'react';
import { Slide } from 'react-slideshow-image';
import Ceremony from './Ceremony';
import Intro from './Intro';
import Date from './Date';
import Party from './Party';

function Testting() {
	return (
		<Slide
			onChange={function noRefCheck() {}}
			onStartChange={function noRefCheck() {}}
			responsive={{}}
			autoplay={false}
			scale={1.4}
			indicators={true}
			transitionDuration={500}
			arrows={false}
			canSwipe={true}
			infinite={true}
			easing='linear'
			slidesToScroll={1}
			slidesToShow={1}
			vertical={false}>
			<Intro />
			<Date />
			<Ceremony />
			<Party />
		</Slide>
	);
}

export default Testting;
