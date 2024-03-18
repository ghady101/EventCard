import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React from 'react';
import Slider from 'react-slick';
import Intro from './Intro';
import Date from './Date';
import Ceremony from './Ceremony';
import Party from './Party';
import Outro from './Outro';

function SlideView() {
	const handleBeforeChange = (current, next) => {
		// 3 - 4
		const outroSlide = document.querySelector('.outro-slide');
		if (next !== 3) {
			// Assuming Outro is the 4th slide (index 3)
		}
	};
	return (
		<div className='container'>
			<Slider
				speed={500}
				centerPadding={0}
				slidesToShow={1}
				slidesToScroll={1}
				infinite={false}
				centerMode={true}
				beforeChange={handleBeforeChange}>
				<div>
					<Intro />
				</div>
				<div>
					<Date />
				</div>
				<div>
					<Ceremony />
				</div>
				<div>
					<Party />
				</div>
				<div className='outro-slide'>
					<Outro />
				</div>
			</Slider>
		</div>
	);
}

export default SlideView;
