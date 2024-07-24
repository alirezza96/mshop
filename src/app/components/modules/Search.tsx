"use client"
import { Input } from "@/app/components/modules/form"
import { fetchFilteredProducts } from "@/app/lib/data"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { useSearchParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
const Search = ({ className, placeholder, globalSearch = false, ...rest }:
    { className: string, placeholder: string, globalSearch: boolean }

) => {
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState("")
    const searchParams = useSearchParams()
    const router = useRouter()
    const params = new URLSearchParams(searchParams)
    function changeHandler(term: string) {
        if (term) {
            params.set("q", term)
        } else {
            params.delete("q")
        }
        setSearch(term)
    }
    const submitHandler = (e) => {
        e.preventDefault()
        router.replace(`/search?${params.toString()}`)
    }
    const fetchProducts = () => {
        if (!search) return false
        const body = { q: search }
        fetch("/api/search", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(data => setProducts(data.products))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        fetchProducts()
    }, [search])
    return (
        <>
            <form onSubmit={submitHandler} className={`bg-white px-2 ${className}`}>
                <Input
                    placeholder={placeholder ? placeholder : "جستجو"}
                    name="search" type="search"
                    onChange={(e) => changeHandler(e.target.value)}
                    defaultValue={params.get("q")}
                >
                    <button type="submit" className="p-2">
                        <MagnifyingGlassIcon className="w-6 h-6 text-Fuchsia hover:stroke-dark-purple" />
                    </button>

                </Input>
            </form>
            <div className="  absolute top-14 inset-x-0 box p-2 z-50">
                {
                    !products.length
                        ?
                        <p className="text-center">محصولی برای نمایش یافت نشد</p>
                        :
                        <>
                            <p>
                                جستجو در دسته بندی پوشاک
                            </p>
                            <p>
                                جستجو در دسته بندی زنانه
                            </p>
                            <p>
                                جستجو در دسته بندی جوراب
                            </p>
                            <div className="h-px w-full bg-black my-2"></div>
                            <ul className="h-64  overflow-y-auto space-y-1 px-1 text-sm">
                                {
                                    products.map(product => (
                                        <li
                                            key={product.id}
                                            className="bg-light-gray rounded-md overflow-hidden"
                                        >
                                            <Link
                                                href={`/products/${product.id}`}
                                                className="flex gap-2">
                                                <Image
                                                    width={48}
                                                    height={48}
                                                    src={product.thumbnail_url}
                                                    alt={`تصویر محصول ${product.fa}`}
                                                />
                                                <p>
                                                    {product.fa}
                                                </p>
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </>
                }

            </div>
        </>
    )
}

export default Search