import { Input } from "@/app/components/modules/form"
const Searchbar = ({ className }) => {
    return (
        <div className={`px-2 ${className}`}>
            <form className="h-10 flex  items-center  bg-gray/30 my-1  rounded-lg " >
                <Input placeholder="جستجو" name="search" type="search" classname="flex-grow bg-transparent mx-2 outline-none focus-visible:border-b-2 border-Fuchsia/30 font-dana" />
                <Input value="جستجو" type="submit" classname="font-morabba" />
            </form>
        </div>
    )
}

export default Searchbar