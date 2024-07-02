"use client"
import { Input } from "@/app/components/modules/form"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { useRouter, useSearchParams } from "next/navigation"
import { useDebouncedCallback } from "use-debounce"
const Searchbar = ({ className }) => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const handelSearch = useDebouncedCallback((term) => {
        const params = new URLSearchParams(searchParams)
        if (term) {
            params.set("q", term)
        } else {
            params.delete("q")
        }
        router.replace(`/search?${params.toString()}`)
        console.log("term =>", term)
    }, 500)
    return (
        <div className={`bg-white px-2 ${className}`}>
            <div
                className="h-10 flex  items-center px-1  bg-gray/30 my-1  rounded-lg " >
                <Input
                    placeholder="جستجو"
                    name="search" type="search"
                    defaultValue={searchParams.get("q")?.toString()}
                    onChange={e => handelSearch(e.target.value)}
                    className="flex-grow bg-transparent mx-2 outline-none focus-visible:border-b-2 border-Fuchsia/30 font-dana" />
                <MagnifyingGlassIcon className="w-6 h-6 text-Fuchsia" />
            </div>
        </div>
    )
}

export default Searchbar