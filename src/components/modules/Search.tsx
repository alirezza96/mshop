"use client"
import { Button, Input } from "@/components/modules/form"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { useSearchParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
export default function Search() {

    return (
        <div className="group">
            <Form />
            {/* <Result/> */}
        </div>
    )
}

const Form = () => {
    const searchParams = useSearchParams()
    const params = new URLSearchParams(searchParams)
    const {replace} = useRouter()
    const changeHandler = (term: string) => {
        if (term) {
            params.set("q", term)
        } else {
            params.delete("q")
        }
    }
    const submitHandler = (e) => {
        console.log("e =>", e)
        e.preventDefault()
        replace(`/search?${params.toString()}`)
    }

    return (
        <form onSubmit={submitHandler} className="bg-white px-2">
            <Input
                placeholder="جستجو"
                name="search" type="search"
                onChange={(e) => changeHandler(e.target.value)}
                defaultValue={searchParams.get("q")?.toString()}
            >
                <button type="submit" className="p-2">
                    <MagnifyingGlassIcon className="w-6 h-6 text-Fuchsia hover:stroke-dark-purple" />
                </button>
            </Input>
        </form>
    )
}

// const Result = () => {
//     const [data, setData] = useState([])


//     const fetchProducts = (term: string) => {
//         const body = { q: term }
//         fetch("/api/search", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(body)
//         })
//             .then(response => response.json())
//             .then(result => setData(result.data))
//             .catch(err => console.log(err))
//     }
//     return (
//         <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all delay-200  absolute top-14 inset-x-0 box p-2 z-50">

//             <div>
//                 <ul className="space-y-1">
//                     {
//                         data.categories?.map(category => {
//                             params.set("q", search)
//                             params.set("category", category.en)
//                             return (
//                                 <li
//                                     key={category.id}
//                                     className="text-sm bg-light-gray rounded-md p-1"
//                                 >
//                                     <span>جستجو در دسته بندی </span>
//                                     <Link
//                                         className="text-Fuchsia font-bold"
//                                         href={`/search?${params.toString()}`}
//                                     >
//                                         {category.name}
//                                     </Link>
//                                     <span className="text-xs text-gray">({category.products_count} محصول)</span>
//                                 </li>
//                             )
//                         }
//                         )
//                     }
//                 </ul>
//                 <div className="h-px w-full bg-gray my-4"></div>

//             </div>
//             <ul className="text-center h-64  overflow-y-auto space-y-1 px-1 text-sm">
//                 {
//                     data.products?.map(product => (
//                         <li
//                             key={product.id}
//                             className="flex items-center gap-2 bg-light-gray rounded-md overflow-hidden"
//                         >
//                             <Link
//                                 href={`/products/${product.id}`}
//                             >
//                                 <Image
//                                     width={48}
//                                     height={48}
//                                     src={product.thumbnail_url}
//                                     alt={`تصویر محصول ${product.name}`}
//                                 />
//                             </Link>
//                             <Link href={`/products/${product.id}`}>
//                                 {product.name}
//                             </Link>
//                         </li>
//                     ))
//                 }
//                 <Button
//                     href={`/search?q=`}
//                     className="inline-flex">
//                     مشاهده بیشتر
//                 </Button>
//             </ul>

//         </div>
//     )
// }