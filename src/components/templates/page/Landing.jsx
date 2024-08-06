"use client"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import cover1 from "/public/banner/01.jpg"
import cover2 from "/public/banner/02.jpg"
import cover3 from "/public/banner/03.jpg"
import { Autoplay,EffectFade } from "swiper/modules"
import 'swiper/css/effect-fade';
const Landing = () => {
    return (
        <Swiper
            className="swiper max-h-96"
            effect="fade"
            autoplay={{
                delay: 4000,
            }}
            loop={true}
            rewind={true}
            modules={[Autoplay, EffectFade]}
        >
            <SwiperSlide>
                <div>
                    <Image src={cover1} alt="Banner Image" width={1024} height={576} className="object-cover aspect-video w-full" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <Image src={cover2} alt="Banner Image" width={1024} height={576} className="object-cover aspect-video w-full" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <Image src={cover3} alt="Banner Image" width={1024} height={576} className="object-cover aspect-video w-full" />
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default Landing