import Image from "next/image"
import { formatCurrency } from "@/lib/utils"
import Link from "next/link"
import CardColor from "./CardColor"
import CardSize from "./CardSize"
import { Suspense } from "react"
import { InvoiceSkeletonCardColor, InvoiceSkeletonCardSize } from "../skeletons"



export default async function CardProduct({ id, href, name, englishName, src }) {
    const price = 1_800_000
    return (
        <div className="group  rounded-lg overflow-hidden hover:bg-white hover:shadow-md transition-all delay-75">
            <Cover src={src} href={href} />

            <div className="p-1 text-sm flex flex-col justify-between  min-h-32 overflow-hidden">
                <Title name={name} href={href} />
                <Suspense fallback={<InvoiceSkeletonCardColor />}>
                    <CardColor productId={id} />
                </Suspense>
                <Suspense fallback={<InvoiceSkeletonCardSize />}>
                    <CardSize productId={id} />
                </Suspense>
                <p> {formatCurrency(price)}</p>
            </div>
        </div>
    )
}



const Cover = ({ src, href }) => (
    <Link
        href={`/products/${href}`}
        className="disabled-drag "
    >
        <Image
            src={src}
            alt="image product"
            height={256}
            width={192}
            className="h-64 w-48 mx-auto disabled-drag aspect-[3/4] object-cover group-hover:scale-105 transition-transform delay-100 "

        />
    </Link>
)

const Title = ({ href, name }) => (
    <Link href={`/products/${href}`} className="line-clamp-2 min-h-10 font-secondary font-thin">
        {name}
    </Link>
)



