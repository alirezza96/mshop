import Link from "next/link"
const page = () => {
    return (
        <div>
           <ul>
            <li>
                <Link href="admin/invoices">invoice</Link>
            </li>
            <li>
                <Link href="admin/customers">customers</Link>
            </li>
            <li>
                <Link href="admin/products">products</Link>
            </li>
           </ul>
        </div>
    )
}

export default page