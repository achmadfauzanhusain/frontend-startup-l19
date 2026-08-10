import Link from "next/link";

import ConnectWallet from "@/components/connectWallet";

const Server = () => {
    return(
        <div className="flex flex-col gap-2 md:flex-row">
            <div className="w-full md:w-2/3 border-0 md:border-r px-2">
                <div className="mt-2 md:mt-4">
                    <h1 className="text-lg font-semibold">Your Joined Server's</h1>
                    <div className="border border-blue-500 mt-4 w-[85%] px-4 py-2 md:py-3 rounded-xl text-sm">
                        <input type="text" placeholder="Filter your servers" className="bg-transparent border-none w-[100%] focus:outline-none" />
                    </div>
                    <hr className="border-gray-300 mt-4" />

                    <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                        <Link href="/server/mechkeyboard" className="border border-gray-300 py-4 px-3 rounded-md flex gap-2 items-center">
                            <div className="p-4 rounded-4xl bg-blue-300"></div>
                            <div>
                                <h1 className="text-sm">mechKeyboard</h1>
                                <p className="text-xs text-gray-500">2700 member</p>
                            </div>
                        </Link>
                        <Link href="/server/artisankeycaps" className="border border-gray-300 py-4 px-3 rounded-md flex gap-2 items-center">
                            <div className="p-4 rounded-4xl bg-blue-300"></div>
                            <div>
                                <h1 className="text-sm">artisanKeycaps</h1>
                                <p className="text-xs text-gray-500">400 member</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <ConnectWallet />
        </div>
    )
}

export default Server