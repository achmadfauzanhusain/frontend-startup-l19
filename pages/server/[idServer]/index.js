import Image from "next/image"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import Link from "next/link";

import { getServerPosts } from "@/services/post";
import { getDetailServer } from "@/services/server"
import ConnectWallet from "@/components/connectWallet"

const DetailServer = () => {
    const [server, setServer] = useState({})
    const [owner, setOwner] = useState(false)
    const [serverPosts, setServerPosts] = useState([])

    const router = useRouter()
    const { idServer } = router.query

    const truncateAddress = (address, start = 6, end = 12) => {
        if (!address) return "";
        if (address.length <= start + end) return address;
        return `${address.slice(0, start)}...${address.slice(-end)}`;
    }

    const fetchDetailServer = async() => {
        const response = await getDetailServer(idServer)
        
        if(!response) {
            toast.error("Failed to fetch servers!")
        } else {
            setServer(response.data)
        }
    }

    const fetchServerPosts = async() => {
        const response = await getServerPosts(idServer)

        if(!response) {
            toast.error("Failed to fetch servers!")
        } else {
            setServerPosts(response.data)
        }
    }

    const checkOwner = async() => {
        const token = await Cookies.get("token")
        if(token) {
            const jwtToken = atob(token)
            const payload = jwtDecode(jwtToken)
            const hashFromPayload = payload.hash

            if(hashFromPayload === server.owner) {
                setOwner(true)
            }
        }
    }

    useEffect(() => {
        if(idServer) {
            fetchDetailServer()
            fetchServerPosts()
        }
    }, [idServer])

    useEffect(() => {
        if(server && server.owner) {
            checkOwner()
        }
    }, [server])

    const formatTimestamp = (timestamp) => {
        if (!timestamp) return "-";

        let date;
        if (typeof timestamp === "string" || typeof timestamp === "number") {
            date = new Date(timestamp);
        } else if (timestamp.seconds) {
            date = new Date(timestamp.seconds * 1000);
        } else {
            return "-";
        }

        return date.toLocaleString("id-ID", {
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    }
    return (
        <div className="flex flex-col gap-2 md:flex-row">
            <div className="w-full md:w-2/3 border-0 md:border-r px-2">
                <div className="mt-4">
                    <p className="text-sm opacity-50">category : {server.category}</p>
                    <div className="flex justify-between items-center">
                        <h1 className="text-xl font-semibold mt-5">{server.serverName}</h1>
                        <p className="text-sm mt-4 opacity-50"><span className="font-semibold opacity-100">{server.members}</span> members</p>
                    </div>
                    <p className="text-sm opacity-50 mt-1">{server.desc}</p>
                    <hr className="mt-4 opacity-50 border border-gray-400" />
                    <div className="mt-2 flex justify-between">
                        {owner ? (
                            <button className="bg-green-500 hover:bg-green-600 transition-all duration-300 cursor-pointer text-white px-4 py-2 rounded-2xl text-sm">
                                You're the Owner
                            </button>
                        ) : (
                            <button className="bg-blue-500 hover:bg-blue-600 transition-all duration-300 cursor-pointer text-white px-4 py-2 rounded-2xl text-sm">
                                Join
                            </button>
                        )}

                        <Link href={`/server/${idServer}/create`} className="border cursor-pointer flex items-center justify-between gap-1 border-blue-500 text-blue-500 px-4 py-2 rounded-2xl text-sm">
                            <Image className="text-blue-500" src="/icon/add_blue.png" width={20} height={15} />
                            Create Post
                        </Link>
                    </div>

                    {/* server posts */}
                    <div className="mt-8 flex flex-col gap-6">
                        {serverPosts?.map((post) => {
                            return (
                                <div key={post.id} className="border-b border-gray-300 pb-6">
                                    {/* header */}
                                    <Link href="/fauzanchenko" className="flex gap-2 items-center">
                                        {/* <Image /> */}
                                        <div className="bg-blue-300 rounded-4xl p-4"></div>

                                        {/* user info */}
                                        <div className="text-xs">
                                            <h2 className="font-semibold">{truncateAddress(post.user)}</h2>
                                            <p className="opacity-50">{post.createdAt ? formatTimestamp(post.createdAt) : "-"}</p>
                                            <p className="mt-1">{post.caption}</p>
                                        </div>
                                    </Link>

                                    {/* content */}
                                    {post.image ? (
                                        <div className="mt-2 flex flex-col md:flex-row">
                                            <div className="flex justify-between flex-row md:flex-col py-3 md:px-3 gap-6 order-2 md:order-1">
                                                <div className="flex flex-row md:flex-col gap-6">
                                                    <button className="cursor-pointer">
                                                        <Image src="/icon/like.png" alt="Like" width={20} height={20} />
                                                    </button>
                                                    <button className="cursor-pointer">
                                                        <Image src="/icon/comment.png" alt="Comment" width={20} height={20} />
                                                    </button>
                                                    <Link href={`/reward/123`} className="cursor-pointer">
                                                        <Image src="/icon/reward.png" alt="Reward This Post" width={25} height={25} />
                                                    </Link>
                                                </div>

                                                <button className="cursor-pointer">
                                                    <Image src="/icon/share.png" alt="Share" width={20} height={20} />
                                                </button>
                                            </div>
                                            <div className="bg-red-200 w-full h-[280px] sm:h-[375px] md:h-[300px] lg:h-[375px] md:w-[300px] lg:w-[375px] order-1 md:order-2"></div>
                                        </div>
                                    ) : (
                                        <div className="mt-2">
                                            <div className="flex justify-between py-1 md:px-2 gap-6">
                                                <div className="flex gap-6">
                                                    <button className="cursor-pointer flex items-center gap-1">
                                                        <Image src="/icon/like.png" alt="Like" width={15} height={15} />
                                                        <p className="text-[10px]">{post.likesCount}</p>
                                                    </button>
                                                    <button className="cursor-pointer flex items-center gap-1">
                                                        <Image src="/icon/comment.png" alt="Comment" width={15} height={15} />
                                                        <p className="text-[10px]">456</p>
                                                    </button>
                                                    <Link href={`/reward/123`} className="cursor-pointer">
                                                        <Image src="/icon/reward.png" alt="Reward This Post" width={20} height={20} />
                                                    </Link>
                                                </div>

                                                <button className="cursor-pointer">
                                                    <Image src="/icon/share.png" alt="Share" width={15} height={15} />
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            <ConnectWallet />
        </div>
    )
}

export default DetailServer