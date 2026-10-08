import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { createServer } from "@/services/server";
import ConnectWallet from "@/components/connectWallet";
import { toast } from "react-toastify";

const CreateServer = () => {
    const [serverName, setServerName] = useState("");
    const [desc, setDesc] = useState("")
    const [category, setCategory] = useState("")

    const handleCreateServer = async() => {
      const data = { serverName, desc, category }

      if(data.serverName === "" || data.desc === "" || data.category === "") {
        toast.error("all field is required")
      } else {
        const res = await createServer(data)
        if(!res) {
          toast.error(res.message)
        } else {
          toast.success("Server created successfully")

          setServerName("")
          setDesc("")
          setCategory("")
        }
      }
    }
    return (
    <div className="flex flex-col gap-2 md:flex-row">
      <div className="w-full md:w-2/3 border-0 md:border-r px-2">
        <div className="mt-2 md:mt-4 flex flex-col gap-3">
            <div className="flex items-center gap-3 px-1">
                <button onClick={() => window.history.back()} aria-label="Back" className="text-gray-900 cursor-pointer">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>
                <div>
                    <h1 className="text-lg font-semibold text-gray-900">Create Server</h1>
                    <p className="text-xs opacity-50">discuss with ur community</p>
                </div>
            </div>

            <div className="mt-2 flex items-center gap-3 bg-gray-100 rounded-xl px-4">
                <span className="opacity-50 shrink-0">
                    <Image src="/icon/write.png" alt="Server name" width={18} height={18} />
                </span>
                <input
                    type="text"
                    placeholder="server name"
                    className="bg-transparent w-full text-sm placeholder:text-sm focus:outline-none py-4"
                    value={serverName}
                    onChange={(e) => setServerName(e.target.value)}
                />
            </div>

            <div className="flex items-center gap-3 bg-gray-100 rounded-xl px-4">
                <svg className="opacity-50 shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 6h16M4 12h16M4 18h10" />
                </svg>
                <input
                    type="text"
                    placeholder="server description"
                    className="bg-transparent w-full text-sm placeholder:text-sm focus:outline-none py-4"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                />
            </div>

            <div className="relative flex items-center gap-3 bg-gray-100 rounded-xl px-4">
                <svg className="opacity-50 shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="3" width="7" height="7" rx="1" />
                    <rect x="14" y="3" width="7" height="7" rx="1" />
                    <rect x="3" y="14" width="7" height="7" rx="1" />
                    <rect x="14" y="14" width="7" height="7" rx="1" />
                </svg>
                <select
                    className="appearance-none bg-transparent w-full text-sm focus:outline-none py-4 pr-6 cursor-pointer"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">choose a category</option>
                  <option value="tech">tech</option>
                  <option value="math">math</option>
                  <option value="mechanical">mechanical</option>
                </select>
                <svg className="pointer-events-none absolute right-4 text-gray-400" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M6 9l6 6 6-6" />
                </svg>
            </div>

          <button onClick={handleCreateServer} className="bg-[#4272FC] mt-3 w-full cursor-pointer text-white py-3 px-4 rounded-2xl hover:bg-blue-500 transition-colors flex justify-center items-center text-xs md:text-sm font-medium gap-3">
            <Image src="/icon/add_white.png" alt="Create Post" width={20} height={20} />
            Create Server
          </button>
        </div>
        <hr className="mt-6 text-gray-200" />
      </div>

      <ConnectWallet />
    </div>
    )
}

export default CreateServer