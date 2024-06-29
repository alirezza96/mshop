import { Button, Input } from "@/app/components/modules/form"

const Searchbar = () => {
    return (
        <form className="container top-0 inset-x-0 h-12 flex  items-center  fixed  bg-white font-morabba rounded-lg my-3 px-2 ">
            <Input placeholder="جستجو" name="search" type="search" classname="flex-grow" />
            <Input value="جستجو" type="submit"  />

        </form>
    )
}

export default Searchbar