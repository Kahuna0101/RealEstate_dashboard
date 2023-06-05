import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const ThumbnailSlider = ({images}) => {
  const [thumbSwiper, setThumbSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          color:"#fff",
        }}
        loop={true}
        navigation={true}
        thumbs={{
          swiper: thumbSwiper && !thumbSwiper.destroyed ? thumbSwiper : null
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
        >
          {images.map((image) => (
            <SwiperSlide key={image}>
                <img 
                  src={image} 
                  alt={image.name}
                  height={546}
                  style={{ objectFit: 'cover', borderRadius: '10px'}}
                  className="post_details-img"
                />
            </SwiperSlide>
          ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbSwiper}
        loop={true}
        spaceBetween={8}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {images.map((image) => (
            <SwiperSlide key={image}>
                <img 
                  src={image} 
                  alt={image.name}
                  height={60}
                  style={{ objectFit: 'fill'}}
                  className="post_details-img"
                />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  )
}

export default ThumbnailSlider;