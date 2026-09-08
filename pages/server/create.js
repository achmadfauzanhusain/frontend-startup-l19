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
      {/* server create */}
      <div className="w-full md:w-2/3 border-0 md:border-r px-2">
        <div className="mt-2 md:mt-4 flex flex-col gap-3">
            <div>
                <h1 className="text-xl font-semibold">Create Server</h1>
                <p className="text-sm opacity-50">discuss with ur community</p>
            </div>

            <input
                type="text"
                placeholder="server name"
                className="bg-gray-100 w-full placeholder:text-sm focus:outline-none py-4 px-4 rounded-xl"
                value={serverName}
                onChange={(e) => setServerName(e.target.value)}
            />
            <input
                type="text"
                placeholder="server description"
                className="bg-gray-100 w-full placeholder:text-sm focus:outline-none py-4 px-4 rounded-xl"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
            />
            <select
                className="bg-gray-100 w-full placeholder:text-sm focus:outline-none py-4 px-4 rounded-xl"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">choose a category</option>
              <option value="tech">tech</option>
              <option value="math">math</option>
              <option value="mechanical">mechanical</option>
            </select>
          <button onClick={handleCreateServer} className="bg-[#4272FC] mt-3 w-full cursor-pointer text-white py-3 px-4 rounded-lg hover:bg-blue-500 flex justify-center items-center text-xs md:text-sm gap-3">
            <Image src="/icon/add_white.png" alt="Create Post" width={20} height={20} />
            Create Server
          </button>
        </div>
        <hr className="mt-4 text-gray-400" />
      </div>

      {/* connect wallet */}
      <ConnectWallet />
    </div>
    )
}

export default CreateServer