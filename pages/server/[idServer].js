import Image from "next/image"
import { useState, useEffect } from "react"

import { getDetailServer } from "@/services/server"
import ConnectWallet from "@/components/connectWallet"

const DetailServer = () => {
    const [server, setServer] = useState({})
    
    const fetchDetailServer = () => {

    }
    return (
        <div className="flex flex-col gap-2 md:flex-row">
            <div className="w-full md:w-2/3 border-0 md:border-r px-2">
                <div className="mt-4">
                    <p className="text-sm opacity-50">category : tech</p>
                    <div className="flex justify-between items-center">
                        <h1 className="text-xl font-semibold mt-5">Mech Keyboard</h1>
                        <p className="text-sm mt-4 opacity-50"><span className="font-semibold opacity-100">4</span> members</p>
                    </div>
                    <p className="text-sm opacity-50 mt-1">build ur mech keyboard</p>
                    <hr className="mt-4 opacity-50 border border-gray-400" />
                    <div className="mt-2 flex justify-between">
                        <button className="bg-blue-500 hover:bg-blue-600 transition-all duration-300 cursor-pointer text-white px-4 py-2 rounded-2xl text-sm">
                            Join
                        </button>

                        <button className="border cursor-pointer flex items-center justify-between gap-1 border-blue-500 text-blue-500 px-4 py-2 rounded-2xl text-sm">
                            <Image className="text-blue-500" src="/icon/add_blue.png" width={20} height={15} />
                            Create Post
                        </button>
                    </div>
                </div>
            </div>

            <ConnectWallet />
        </div>
    )
}

export default DetailServer