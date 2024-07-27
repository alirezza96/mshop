"use client"
export default function Roadmap() {
    return (
        <div className="font-morabba text-sm h-16 w-[70%] mx-auto mb-2 flex justify-between  text-center">
            <div className="h-6  flex flex-auto items-center">
                <div className="relative bg-white border border-solid rounded-md border-gray w-6 ">
                    1
                    <span className="w-max absolute top-full left-1/2 -translate-x-1/2 ">
                        اطلاعات سفارش
                    </span>
                </div>
                <div className="bg-gray flex-1 h-px"></div>
            </div>
            <div className="h-6  flex flex-auto items-center">
                <div className="relative bg-white border border-solid rounded-md border-gray w-6 ">
                    2
                    <span className="w-max absolute top-full left-1/2 -translate-x-1/2 ">
                        اطلاعات ارسال
                    </span>
                </div>
                <div className="bg-gray flex-1 h-px"></div>
            </div>
            <div className="h-6  flex  items-center">
                <div className="relative bg-white border border-solid rounded-md border-gray w-6 ">
                    3
                    <span className="w-max absolute top-full left-1/2 -translate-x-1/2 ">
                        پرداخت
                    </span>
                </div>
            </div>
        </div>
    )
}