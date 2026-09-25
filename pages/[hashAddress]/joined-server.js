import Link from "next/link";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { getJoinedServers, getMyServers } from "@/services/server";
import { useRouter } from "next/router";
import ConnectWallet from "@/components/connectWallet";

const Server = () => {
    const [myServers, setMyServers] = useState([])
    const [servers, setServers] = useState([])

    const router = useRouter()
    const { hashAddress } = router.query

    const fetchMyServers = async() => {
        const response = await getMyServers()
        if(!response) {
            toast.error("Failed to fetch servers!")
        } else {
            setMyServers(response.data)
        }
    }

    const fetchJoinedServers = async() => {
        const response = await getJoinedServers(hashAddress)
        if(!response) {
            toast.error("Failed to fetch servers!")
        } else {
            setServers(response.data)
        }
    }

    useEffect(() => {
        if(hashAddress) {
            fetchMyServers()
            fetchJoinedServers()
        }
    }, [hashAddress])
    return(
        <div className="flex flex-col gap-2 md:flex-row">
            <div className="w-full md:w-2/3 border-0 md:border-r px-2">
                <div className="mt-2 md:mt-4">
                    <h1 className="text-lg font-semibold">Your Joined Server's</h1>
                    <div className="border border-blue-500 mt-2 md:mt-4 w-[100%] md:w-[85%] px-4 py-2 md:py-3 rounded-xl text-sm">
                        <input type="text" placeholder="Filter your servers" className="bg-transparent border-none w-[100%] focus:outline-none" />
                    </div>
                    <hr className="border-gray-300 mt-4" />

                    <div className="mt-4 grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-2">
                        {myServers.map((server) => (
                            <Link key={server.id} href={`/server/${server.id}`} className="border border-gray-300 py-4 px-3 rounded-md flex gap-2 items-center">
                                <div className="p-4 rounded-4xl bg-blue-300"></div>
                                <div>
                                    <h1 className="text-sm">{server.serverName}</h1>
                                    <p className="text-xs text-gray-500">{server.members} <span className="text-black font-semibold">member</span></p>
                                </div>
                            </Link>
                        ))}
                        {servers.map((server) => (
                            <Link key={server.id} href={`/server/${server.id}`} className="border border-gray-300 py-4 px-3 rounded-md flex gap-2 items-center">
                                <div className="p-4 rounded-4xl bg-blue-300"></div>
                                <div>
                                    <h1 className="text-sm">{server.serverName}</h1>
                                    <p className="text-xs text-gray-500">{server.members} <span className="text-black font-semibold">member</span></p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <ConnectWallet />
        </div>
    )
}

export default Server