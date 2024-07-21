const loading = () => {
    return (
        <div className=" min-h-64 flex items-center justify-center gap-x-2">
            <div className="bg-pink w-1 h-1 rounded-full animate-ping"></div>
            <div className="bg-pink w-[6px] h-[6px] rounded-full animate-ping"></div>
            <div className="bg-pink w-1 h-1 rounded-full animate-ping"></div>
        </div>
    )
}

export default loading