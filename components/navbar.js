const Navbar = () => {
    return (
        <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-300 h-[73px]">
            <div className="px-6 h-full flex justify-between items-center">
                <h1 className="text-2xl font-bold">MUDA</h1>

                {/* search */}
                <div>
                    Search
                </div>

                {/* profile */}
                <div>
                    Profile
                </div>
            </div>
        </div>
    )
}

export default Navbar