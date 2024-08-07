import { ArrowLeftIcon } from "@heroicons/react/24/outline"
import { Button } from "../../modules/form"
const ProductsContainer = ({ title, href = "#", children, className }) => {
    return (
        <div className={`space-y-4 ${className}`}>
            {!title ? "" : <ProductsHeader href={href}>
                {title}
            </ProductsHeader>}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
                {children}
            </div>
        </div>
    )
}


const ProductsHeader = ({ children, href }) => {
    return (
        <div className="text-Fuchsia flex items-center gap-1 font-morabba divide-x-4 divide-y-4 divide-Fuchsia">
            <h2 className="text-xl">
                {children}
            </h2>
            <div className="bg-Purple h-px flex-grow"></div>
            <Button
                href={href}
                className="flex gap-1 items-center group"
            >

                مشاهده تمامی محصولات
                <ArrowLeftIcon className="w-4 h-4 rotate-45 group-hover:rotate-0 transition-transform delay-75" />
            </Button>
        </div>
    )
}

export default ProductsContainer