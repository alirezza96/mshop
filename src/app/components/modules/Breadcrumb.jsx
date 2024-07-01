
import { ChevronLeftIcon } from "@heroicons/react/24/outline"
import { NavLink } from "./form"
const Breadcrumb = ({ breadcrumbs }) => {
  return (
    <ol className="flex items-center min-h-10">
      {
        breadcrumbs?.map((breadcrumb, index) => {
          const route = breadcrumbs.slice(0, index + 1).map(breadcrumb => breadcrumb.eng).join("/")
          return (
            <li key={breadcrumb.eng}>
              <div className="flex items-center">
                <ChevronLeftIcon className={`w-4 h-4 text-Purple stroke-2 ${index == 0 ? "hidden" : ""}`} />
                <NavLink href={`/${route}`} className="text-sm font-medium">
                  {breadcrumb.fa}
                </NavLink>
              </div>
            </li>
          )
        }
        )

      }
    </ol>
  )
}

export default Breadcrumb

