import Link from "next/link"
const ProductsContainer = ({ title, href = "#", children, className }) => {
    return (
        <div className={`box p-2 space-y-4 my-4 ${className}`}>
            <ProductsHeader href={href}>
                {title}
            </ProductsHeader>
            <div className="flex overflow-x-scroll">

                {children}
            </div>
        </div>
    )
}


const ProductsHeader = ({ children, href }) => {
    return (
        <div className="text-Fuchsia flex items-center gap-1 font-morabba divide-x-4 divide-y-4 divide-Fuchsia ">
            <h2 className="text-xl">
                {children}
            </h2>
            <div className="bg-Purple h-px flex-grow"></div>
            <Link className=" bg-Purple/10 hover:text-Purple hover:bg-Purple/20  rounded-xl p-2 text-sm" href={href}>مشاهده تمامی محصولات</Link>
        </div>
    )
}

export default ProductsContainer