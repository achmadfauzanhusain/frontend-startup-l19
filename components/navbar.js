const Navbar = () => {
    return (
        <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-300 h-[73px]">
            <div className="px-4 md:px-6 h-full text-sm flex justify-center items-center">
                <div className="border-2 border-blue-500 w-[85%] text-center py-2 md:py-3 rounded-2xl">
                    <input type="text" placeholder="Find ur interest" className="bg-transparent text-center border-none w-[100%] focus:outline-none" />
                </div>
            </div>
        </div>
    )
}

export default Navbar