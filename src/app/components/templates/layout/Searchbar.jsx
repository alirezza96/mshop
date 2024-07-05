"use client"
import { Button, Input } from "@/app/components/modules/form"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"
// import { useDebouncedCallback } from "use-debounce"
const Searchbar = ({ className }) => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const [search, setSearch] = useState("")
    const handelFastSearch = (term) => {
        if (!term.trim()) return false
        setSearch(term)
    }
    const handelSearch = () => {
        const params = new URLSearchParams(searchParams)
        if (!search) return false
        if (search) {
            params.set("q", search)
        } else {
            params.delete("q")
        }
        router.replace(`/search?${params.toString()}`)
    }
    return (
        <div className={`bg-white px-2 ${className}`}>
            <Input
                placeholder="جستجو"
                name="search" type="search"
                defaultValue={searchParams.get("q")?.toString()}
                onChange={e => handelFastSearch(e.target.value)}
            >
                <Button onClick={handelSearch}>
                    <MagnifyingGlassIcon className="w-6 h-6 text-Fuchsia" />

                </Button>

            </Input>
        </div>
    )
}

export default Searchbar