import { formatDateToLocal } from "../lib/utils"

const page = () => {
    const date = formatDateToLocal(new Date())
    const res = typeof(date)
    return (
        <div>
            test page
            {date}

        </div>
    )
}

export default page