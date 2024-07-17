import { Button } from '@/app/components/modules/form';
import Search from '@/app/components/modules/Search';

const DashboardHeader = ({ children, placeholder, href }) => {
    return (
        <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
            <Button className="p-2" href={href}>
                {children}
            </Button>
            <Search placeholder={placeholder} />
        </div>
    )
}

export default DashboardHeader