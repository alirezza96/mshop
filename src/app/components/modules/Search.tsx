"use client"
import { Button, Input } from "@/app/components/modules/form"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"
// import { useDebouncedCallback } from "use-debounce"
const Search = ({ className, placeholder, globalSearch = false }:
    { className: string, placeholder: string, globalSearch: boolean }
) => {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const router = useRouter()
    const [search, setSearch] = useState("")
    const handelFastSearch = (term: string) => {
        if (!term.trim()) return false
        setSearch(term)
    }
    const handelSearch = () => {
        const params = new URLSearchParams(searchParams)
        if (!search) return false
        params.set("page", "1")
        if (search) {
            params.set("q", search)
        } else {
            params.delete("q")
        }
        router.replace(`${globalSearch ? "/search" : pathname}?${params.toString()}`)
    }
    return (
        <div className={`bg-white px-2 ${className}`}>
            <Input
                placeholder={placeholder ? placeholder : "جستجو"}
                name="search" type="search"
                defaultValue={searchParams.get("q")?.toString()}
                onChange={(e) => handelFastSearch(e.target.value)}
            >
                <Button onClick={handelSearch} className="p-2">
                    <MagnifyingGlassIcon className="w-6 h-6 text-Fuchsia" />

                </Button>

            </Input>
        </div>
    )
}

export default Search