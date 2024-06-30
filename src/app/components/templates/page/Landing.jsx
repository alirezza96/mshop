"use client"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import cover1 from "/public/banner/01.jpg"
import cover2 from "/public/banner/02.jpg"
import cover3 from "/public/banner/03.jpg"
const Landing = () => {
    return (
        <Swiper
            className="swiper h-96"
            autoplay={true}
            loop={true}
            rewind={true}
            


        >
            <SwiperSlide>
                <div>
                    <Image src={cover1} width={1024} height={576} className="object-cover aspect-video w-full" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <Image src={cover2} width={1024} height={576} className="object-cover aspect-video w-full" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <Image src={cover3} width={1024} height={576} className="object-cover aspect-video w-full" />
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default Landing