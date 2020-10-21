import { useEffect, useState } from 'react';
import '../../styles/styles.css'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { useQuery } from '@apollo/client';


import { GET_BANNER_URLS } from '../../GraphQL/queries/queries';


let images = [];

const responsive = {
    0: { items: 1 },
    1024: { items: 1 },
}

const loadImages = () => {
    const { loading, error, data } = useQuery(GET_BANNER_URLS);
    if (data) {
        data.rbsliderBanner[0].sliders.forEach((item, index) => {
            images.push(<img src={item.img_url_final} />);
        });
    }
}


const AliceCarousell = () => {
    loadImages();
    return (
        <div className="w-100">
            {images.length ? <AliceCarousel
                items={images}
                responsive={responsive}
                autoPlayInterval={2000}
                autoPlayDirection="rtl"
                autoPlay={true}
                fadeOutAnimation={true}
                mouseTrackingEnabled={true}
                disableAutoPlayOnAction={true}
            /> : null}
        </div>
    )
}

export default AliceCarousell;