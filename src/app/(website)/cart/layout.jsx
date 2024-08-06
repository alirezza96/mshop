import { Button, Input } from "@modules/form"
import Roadmap from "@templates/(website)/cart/layout/roadmap"
import { ArrowLeftIcon } from "@heroicons/react/24/outline"
export default function layout({ children }) {
    return (
        <div>
            <Roadmap />
            <div className="flex flex-col md:flex-row gap-2">
                <div className="flex-1">
                    {children}
                </div>
                <div className=" flex flex-col justify-around space-y-2 min-h-36 max-h-44 basis-56 sticky top-16">
                    <Container>
                        <table className="w-full  ">
                            <tbody >
                                <tr>
                                    <td>
                                        قیمت کالاها
                                    </td>
                                    <td className="text-left">
                                        4,199,000
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        جمع سبد خرید
                                    </td>
                                    <td className="text-left">
                                        4,090,000
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        سود شما از خرید
                                    </td>
                                    <td className="text-left">
                                        109,000
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </Container>



                    {/* <form>
                        <Input
                            placeholder="کد تخفیف را وارد کنید"
                            type="text">
                            <button
                                className="bg-white m-1 px-1 rounded-lg"
                            >
                                تایید
                            </button>
                        </Input>
                    </form> */}
                    <Container>
                        نشانی
                    </Container>
                    <Button
                        href="cart/shipping-method"
                        className="flex justify-center items-center gap- text-center my-2"
                    >
                        ادامه
                        <ArrowLeftIcon className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </div>
    )
}

const Container = ({ children }) => {
    return (
        <div className="bg-white rounded-lg p-2">
            {children}
        </div>
    )
}