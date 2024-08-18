import { ArrowLeftIcon } from "@heroicons/react/24/outline"
import { Button } from "@modules/form"

export default function ProductsContainer({ title, href, children}) {
    return (
        <div className="space-y-4">
            <ProductsHeader href={href} title={title} />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
                {children}
            </div>
        </div>
    )
}


const ProductsHeader = ({ title, href }) => {
    const elem = href ?
        <div className="text-Fuchsia flex items-center gap-1 font-morabba" aria-label="products-header">
            <Button
                href={href}
                className="flex gap-1 items-center group"
            >

                {title}
                <ArrowLeftIcon className="w-4 h-4 rotate-45 group-hover:rotate-0 transition-transform delay-75" />
            </Button>
            <div className="bg-Purple h-px flex-grow"></div>
        </div>
        : null
    return elem
}

