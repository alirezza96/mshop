"use client"
import Image from "next/image"
import { ArrowLeftIcon } from "@heroicons/react/24/outline"
import { useState } from "react"
export default function Images({ images }) {
    const [imageIndex, setImageIndex] = useState(0)

    const imageController = (action) => {
        
        const newIndex = (imageIndex + action + images.length) % images.length;
        console.log("newIndex =>", newIndex)
        setImageIndex(newIndex);
    }

    return (
        <div className=" space-y-2">
            <div className="relative">
                <Image
                    src={images[imageIndex].src}
                    alt={`تصویر محصول ${images[imageIndex].name}`}
                    height={540}
                    width={405}
                    className="rounded-lg disabled-drag mx-auto" />
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
            <div className="flex flex-row-reverse justify-center h-16 gap-1 overflow-x-scroll">
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