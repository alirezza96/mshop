
import { ChevronLeftIcon } from "@heroicons/react/24/outline"
import { NavLink } from "./form"
import Link from "next/link"
const Breadcrumb = ({ breadcrumbs }) => {
  return (
    <ol className="flex items-center min-h-10">
      {
        breadcrumbs?.map((breadcrumb, index) => (
          <li key={breadcrumb.href}>
            <div className="flex items-center">
              <ChevronLeftIcon className={`w-4 h-4 text-Purple stroke-2 ${index === 0 ? "hidden" : ""}`} />
              <Link href={breadcrumb.href} className={`text-sm font-medium text-Fuchsia hover:bg-Purple/10 hover:text-Purple rounded-xl p-2 ${breadcrumb.active ? "font-bold text-Purple child:stroke-Purple" : ""}`}>

                {breadcrumb.label}
              </Link>
            </div>
          </li>
        )

        )

      }
    </ol>
  )
}

export default Breadcrumb

