import './CarouselWorks.scss';

import React, {Component} from 'react';
import Slider from 'react-slick';
import {Link} from 'react-router-dom';
import {FS_IMG_URL} from '~/libs/api';

class CarouselWorks extends Component {
    render() {
        const settings = {
            autoplay: true,
            autoplaySpeed: 4000,
            infinite: true,
            slidesToScroll: 1,
            slidesToShow: 3,
            rtl: true,
            arrows: false,
            variableWidth: true
        };
        return (
            <Link to="/">
                <Slider {...settings}>
                    {this.props.images.map(image => (
                        <div key={image.id} className="carousel-works__photo">
                            <img src={`${FS_IMG_URL}${image.id}/${image.name}?`} alt={image.name}/>
                        </div>))}
                </Slider>
            </Link>
        );
    }
}

export default CarouselWorks;