"use client"
import Image from "next/image"
import { ArrowLeftIcon } from "@heroicons/react/24/outline"
import { useEffect, useState } from "react"
export default function Images({ images }) {
    const [imageIndex, setImageIndex] = useState(0)
    const [touchStartX, setTouchStartX] = useState(null);
    const imageController = (action) => {
        const newIndex = (imageIndex + action + images.length) % images.length;
        setImageIndex(newIndex);
    }

    const handleTouchStart = (e) => {
        const touchX = e.touches[0].clientX;
        setTouchStartX(touchX);
      };
    
      const handleTouchEnd = (e) => {
        const touchEndX = e.changedTouches[0].clientX;
    
        if (touchStartX !== null) {
          const swipeDistance = touchEndX - touchStartX;
    
          if (swipeDistance > 50) {
            // سوایپ به راست (به عکس قبلی برو)
            imageController(-1);
          } else if (swipeDistance < -50) {
            // سوایپ به چپ (به عکس بعدی برو)
            imageController(1);
          }
        }
    
        setTouchStartX(null); // ریست کردن مقدار برای سوایپ بعدی
      };
    return (
        <div>
            <div className="relative">
                <Image
                    src={images[imageIndex].src}
                    alt={`تصویر محصول ${images[imageIndex].name}`}
                    height={540}
                    width={405}
                    className="rounded-lg disabled-drag mx-auto"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}                />
                <div className="backdrop-blur-md text-black/40 border border-solid border-black/10 absolute bottom-2 left-1/2 -translate-x-1/2  w-32 rounded-full flex justify-evenly ">
                    <button onClick={() => imageController(1)}>
                        <ArrowLeftIcon className="w-6 rotate-180 hover:text-black hover:scale-105 transition-transform cursor-pointer delay-100" />
                    </button>
                    <div className="h-8 bg-black/10 w-px "></div>
                    <button onClick={() => imageController(-1)}>
                        <ArrowLeftIcon className="w-6 hover:text-black hover:scale-105 transition-transform cursor-pointer delay-100" />
                    </button>
                </div>
            </div>
            <div className="flex flex-row-reverse justify-center  gap-1 overflow-x-auto py-2">
                {
                    images.map((thumbnail, index) => (

                        <Image
                            key={thumbnail.name}
                            src={thumbnail.src}
                            alt={`images ${thumbnail.name}`}
                            height={64}
                            width={64}
                            className={`aspect-square object-cover first:rounded-e-md last:rounded-s-md disabled-drag 
                                // ${imageIndex === index ? "drop-shadow-lg" : ""}
                                `}
                            onMouseOver={() => setImageIndex(index)}
                        />
                    )
                    )
                }
            </div>
        </div>
    )
}

const Controller = () => (
    <div className="backdrop-blur-md text-black/40 border border-solid border-black/10 absolute bottom-2 left-1/2 -translate-x-1/2  w-32 rounded-full flex justify-evenly ">
        <ArrowLeftIcon className="w-6 rotate-180 hover:text-black hover:scale-105 transition-transform cursor-pointer delay-100" />
        <div className="h-8 bg-black/10 w-px "></div>
        <ArrowLeftIcon className="w-6 hover:text-black hover:scale-105 transition-transform cursor-pointer delay-100" />
    </div>
)