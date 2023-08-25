import './image-slider.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Thumbs} from "swiper/modules";
import { useState} from "react";

export const ImageSlider = ({images}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className="slider-container">
            <Swiper
                loop={true}
                spaceBetween={10}
                modules={[Navigation,Thumbs]}
                grabCursor={true}
                className={'images-slider'}
                thumbs={{swiper: thumbsSwiper}}
            >
                {images.map((image) => (
                    <SwiperSlide key={image}>
                        <img src={image} alt="Swiper-image"/>
                    </SwiperSlide>
                ))}
            </Swiper>

            <Swiper
                spaceBetween={24}
                slidesPerView={3}
                modules={[Navigation,Thumbs]}
                className={'images-slider-thumbs'}
                onSwiper={setThumbsSwiper}
            >
                {images.map((image) => (
                    <SwiperSlide key={image}>
                        <div className="images-slider-thumbs-wrapper">
                            <img src={image} alt="Swiper-image" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
