import { Button } from '@/app/components/modules/form';
import Search from '@/app/components/modules/Search';
import { PlusCircleIcon } from '@heroicons/react/24/outline';

const TableHeader = ({ title, href }) => {
    return (
        <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
            <Button className="p-2" href={href}>
                <PlusCircleIcon className='w-6 h-6' />
            </Button>
            <Search placeholder={"جستجو" + " " + title} />
        </div>
    )
}

export default TableHeader