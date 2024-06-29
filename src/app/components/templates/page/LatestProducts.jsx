import Link from "next/link"
import CardProduct from "../../modules/cards/CardProduct"

const LatestProducts = () => {
    return (
        <div className="box p-2 space-y-2">
            <div className="flex items-center gap-1 font-morabba divide-x-4 divide-y-4 divide-Fuchsia ">
                <h2 className="text-xl">آخرین محصولات</h2>
                <div className="bg-Purple h-px flex-grow"></div>
                <Link className="text-Fuchsia bg-Purple/10 hover:text-Purple hover:bg-Purple/20  rounded-xl p-2 text-sm" href={"#"}>مشاهده تمامی محصولات</Link>
            </div>
            <div className="flex gap-x-4 overflow-x-scroll ">

                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
            </div>
        </div>
    )
}

export default LatestProducts