import Search from '@modules/Search';
import { PlusCircleIcon } from '@heroicons/react/24/outline';

const TableHeader = ({ title, href }) => {
    return (
        <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
            <button className="p-2 text-Fuchsia hover:rotate-90 delay-100 transition-transform" href={href}>
                <PlusCircleIcon className='w-6 h-6' />
            </button>
            <Search placeholder={"جستجو" + " " + title} />
        </div>
    )
}

export default TableHeader