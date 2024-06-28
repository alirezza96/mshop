import Button from "@/app/components/modules/button"

const Searchbar = () => {
    return (
        <form className="container top-0 inset-x-0 h-12 flex  items-center fixed  bg-white font-morabba rounded-lg my-3 px-2 ">
            <input placeholder="جستوجو" name="search" type="search" className="mx-2 flex-1 " />
            <Button>جستوجو</Button>
        </form>
    )
}

export default Searchbar