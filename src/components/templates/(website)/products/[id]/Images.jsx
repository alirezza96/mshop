"use client"
import Image from "next/image"
import { ArrowLeftIcon } from "@heroicons/react/24/outline"
import { useState } from "react"
import NoPic from "/public/noProduct.svg"
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
                    src={images[imageIndex]?.src || NoPic}
                    alt={`تصویر محصول ${images[imageIndex]?.name}`}
                    height={540}
                    width={405}
                    className="rounded-lg disabled-drag mx-auto"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd} />
                {
                    images[imageIndex]?.src &&
                    <Controller imageController={imageController} />
                }
            </div>
            <div className="flex flex-row-reverse justify-center  gap-1 overflow-x-auto py-2">
                {
                    images?.map((thumbnail, index) => (
                        <Image
                            key={thumbnail.name}
                            src={thumbnail.src}
                            alt={`images ${thumbnail.name}`}
                            height={64}
                            width={64}
                            className={`aspect-square object-cover first:rounded-e-md last:rounded-s-md disabled-drag 
                              ${imageIndex === index ? "drop-shadow-lg" : ""}
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

const Controller = ({ imageController }) => (
    <div className="backdrop-blur-md  text-black/40 border border-solid border-black/10 absolute bottom-2 left-1/2 -translate-x-1/2  w-32 rounded-full flex justify-evenly items-center h-10">
        <Button
            className="rotate-180"
            onClick={() => imageController(1)}>
        </Button>
        <div className="h-6 bg-black/10 w-px "></div>
        <Button
            onClick={() => imageController(-1)}>
        </Button>
    </div>
)


const Button = ({ className, ...rest }) => (
    <button {...rest}
        className={`w-8 h-8 p-1  hover:text-black hover:scale-105 
                        active:bg-black/10 active:rounded-full
                        transition-transform cursor-pointer delay-100
                        ${className}
                        `}
    >
        <ArrowLeftIcon />

    </button>
)