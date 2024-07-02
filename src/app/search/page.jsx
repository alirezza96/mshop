import CardProduct from "../components/modules/cards/CardProduct"

const page = ({ searchParams }) => {
    const { q: query, page: currentPage = 1 } = searchParams
    const result = true
    return !result ? <h2>محصولی یافت نشد</h2> :
        (
            <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
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
        )
}
export default page