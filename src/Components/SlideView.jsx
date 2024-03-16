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
	return (
		<div className='container'>
			<Slider
				speed={500}
				centerPadding={0}
				slidesToShow={1}
				slidesToScroll={1}
				infinite={false}
				centerMode={true}>
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
				<div>
					<Outro />
				</div>
			</Slider>
		</div>
	);
}

export default SlideView;
