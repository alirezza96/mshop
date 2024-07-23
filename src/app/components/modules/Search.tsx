"use client"
import { Input } from "@/app/components/modules/form"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

const Search = ({ className, placeholder, globalSearch = false, ...rest }:
    { className: string, placeholder: string, globalSearch: boolean }

) => {
    // const searchParams = useSearchParams()
    // const pathname = usePathname()
    // const router = useRouter()
    // const handelFastSearch = (term: string) => {
    //     if (!term.trim()) return false
    //     setSearch(term)
    // }
    // const handelSearch = () => {
    //     const params = new URLSearchParams(searchParams)
    //     if (!search) return false
    //     params.set("page", "1")
    //     if (search) {
    //         params.set("q", search)
    //     } else {
    //         params.delete("q")
    //     }
    //     router.replace(`${globalSearch ? "/search" : pathname}?${params.toString()}`)
    // }
    const searchParams = useSearchParams()
    const searchHandler = (e) => {
        e.preventDefault()
        const params = new URLSearchParams(searchParams)
        console.log("params =>", params.get("q"))
    }
    return (
        <form onSubmit={searchHandler} className={`bg-white px-2 ${className}`}>
            <Input
                placeholder={placeholder ? placeholder : "جستجو"}
                name="search" type="search"
            >
                <button type="submit" className="p-2">
                    <MagnifyingGlassIcon className="w-6 h-6 text-Fuchsia hover:stroke-dark-purple" />
                </button>

            </Input>
        </form>
    )
}

export default Search