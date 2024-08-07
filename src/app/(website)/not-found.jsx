import { Button } from "@modules/form"
import { FaceFrownIcon, HomeIcon } from '@heroicons/react/24/outline';
const NotFound = () => {
  return (
    <main className="text-center">
      <FaceFrownIcon className="w-10 text-gray-400 inline-block" />
      <h2 className="text-xl font-semibold">چیزی یافت نشد.</h2>
      <Button
        href="/"
        className="p-2"
      >
        <HomeIcon className='h-6 inline' />
      </Button>
    </main>
  )
}
export default NotFound