import Breadcrumb from "@modules/Breadcrumb"
import Image from "next/image"
import Form from "@templates/(website)/products/[id]/create-form"
import { fetchFavorite, fetchProductById, fetchProductColorsById, fetchProductSizesById } from "@/lib/data"
import { notFound } from "next/navigation"
import Favorite from "@templates/(website)/products/[id]/Favorite"
import Images from "@templates/(website)/products/[id]/Images"
import { getPayload } from "@/lib/auth/session"
import { fetchImagesById } from "@/scripts/products"

import { Suspense } from "react"

export const generateMetadata = async ({ params }) => {
    const product = await fetchProductById(params.id)
    if (!product) return notFound()
    return {
        title: product.name
    }
}



const breadcrumbs = [
    { label: "پوشاک", href: "wear" },
    { label: "زنانه", href: "womans" },
    { label: "دامن", href: "skirt" },
]

export default async function page({ params }) {
    const { id: productId } = params
    // if product not found redirect to not-found page
    const product = await fetchProductById(productId)
    if (!product) notFound()
    const payload = await getPayload()
    const userId = payload?.userId
    const colors = await fetchProductColorsById(productId)
    const sizes = await fetchProductSizesById(productId)
    const isFavorite = await fetchFavorite(productId, userId)
    const images = await fetchImagesById(productId)

    return (
        <div className="container">
            <Breadcrumb breadcrumbs={breadcrumbs} />
            <div className="my-3 flex flex-col  md:flex-row gap-4 md:gap-8 ">
                {/* <Suspense fallback="loading..."> */}
                    <Images images={images}/>
                {/* </Suspense> */}
                <div className="flex-auto flex flex-col justify-between  ">
                    <div className="space-y-[10px]">

                        <div className="flex justify-between gap-4">
                            <h2 className="text-base font-secondary">
                                {product.name}
                            </h2>

                            <Favorite
                                isFavorite={isFavorite}
                                userId={userId}
                                productId={productId}
                            />
                        </div>
                        <div className="h-px mt-4 bg-gray"></div>
                        <Form productId={productId} colors={colors} sizes={sizes} />

                    </div>
                </div>
            </div>
            <Description />

        </div >
    )
}




const Description = () => {
    return (
        <>
            <div className="box  flex justify-around gap-2 p-1 font-secondary sticky text-center top-12 md:top-14 ">
                <a href="#spec" className="bg-Purple/20 flex-1 p-2 rounded-md">
                    مشخصات
                </a>
                <a href="#desc" className=" flex-1 p-2 rounded-md">
                    توضیحات
                </a>
            </div>
            <div className="space-y-6 mt-4">
                <p id="spec" >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil veniam vitae maiores molestias ab dignissimos aspernatur amet alias consectetur facere laudantium dolorem et neque ut dolore provident, reiciendis ipsam voluptatibus.
                    Pariatur unde tenetur expedita quisquam ratione? Aut, consectetur alias similique doloremque, placeat voluptas numquam minima, totam corporis ducimus nam autem ad molestias quis est laborum aspernatur recusandae voluptatibus libero saepe?
                </p>
                <p id="desc">
                    1234
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil veniam vitae maiores molestias ab dignissimos aspernatur amet alias consectetur facere laudantium dolorem et neque ut dolore provident, reiciendis ipsam voluptatibus.
                    Pariatur unde tenetur expedita quisquam ratione? Aut, consectetur alias similique doloremque, placeat voluptas numquam minima, totam corporis ducimus nam autem ad molestias quis est laborum aspernatur recusandae voluptatibus libero saepe?
                </p>
            </div>

        </>
    )
}