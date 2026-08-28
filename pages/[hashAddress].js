import Link from "next/link"
import { useAccount } from 'wagmi';
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";

import Cookies from "js-cookie";

import ConnectWallet from "@/components/connectWallet"
import { setRegister, setLogin } from "@/services/auth";
import { useState, useEffect } from "react";
import { generateProof } from "@/lib/zk/generateProof";

const Wallet = () => {
    const { address, isDisconnected } = useAccount();
    const [alreadyRegister, setAlreadyRegister] = useState(false)
    const [alreadyGenerateProof, setAlreadyGenerateProof] = useState(false)
    const [alreadyLogin, setAlreadyLogin] = useState(false)

    const [proof, setProof] = useState(null)
    const [publicSignals, setPublicSignals] = useState(null)

    const handleRegister = async() => {
        const response = await setRegister({ address })
        if(response.error) {
            toast.error(response.message)
            setAlreadyRegister(true)
        } else {
            toast.success("success registering ur address!")
            setAlreadyRegister(true)
        }
    }
    const handleGenerateProof = async() => {
        try {
            if(!address) {
                toast.error("u must register before generating the proof!")
            }
            const { proof, publicSignals } = await generateProof(address)

            setProof(proof)
            setPublicSignals(publicSignals)

            setAlreadyRegister(true)
            setAlreadyGenerateProof(true)
            toast.success("Success generating proof!")
        } catch (error) {
            toast.error(error.message)
        }
    }
    const handleLogin = async() => {
        const data = { proof, publicSignals }
        if(!proof && !publicSignals) {
            toast.error("u must generating proof before login!")
        }

        const response = await setLogin(data)
        if(response.error) {
            toast.error(response.error)
        } else {
            const token = response.data.data
            const tokenBase64 = btoa(token)
            Cookies.set("token", tokenBase64, { expires: 7 })
            setAlreadyLogin(true)
            toast.success("login success!")
        }
    }

    const checkToken = async() => {
        const token = await Cookies.get("token")
        if(token) {
            const jwtToken = atob(token)
            const payload = jwtDecode(jwtToken)
            const hashFromPayload = payload.hash
            console.log(hashFromPayload)

            setAlreadyRegister(true)
            setAlreadyGenerateProof(true)
            setAlreadyLogin(true)
        }
    }
    const removeTokenWhenDisconnected = async() => {
        if(isDisconnected) {
            Cookies.remove("token")
        }
    }

    useEffect(() => {
        checkToken()
        removeTokenWhenDisconnected()
    }, [isDisconnected])
    return (
        <div className="flex flex-col gap-2 md:flex-row pb-12">
            <div className="w-full md:w-2/3 border-0 md:border-r px-2">
                <div className="mt-4 md:mt-8">
                    <div className="bg-blue-300 rounded-3xl w-[34px] h-[34px]"></div>
                    <hr className="border-gray-300 mt-4" />
                    <div className="grid grid-cols-2 justify-start gap-2 md:gap-4 mt-4">
                        <div className="flex flex-col gap-2 text-xs sm:text-sm">
                            <div className="flex items-center justify-between">
                                <p>Display Name</p>
                                <p>:</p>
                            </div>
                            
                            <div className="flex items-center justify-between">
                                <p>Wallet Address</p>
                                <p>:</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 text-xs sm:text-sm text-gray-500">
                            <p>-</p>
                            <p className="break-all">{address}</p>
                        </div>
                    </div>
                    <hr className="border-gray-300 mt-4" />

                    <div className="mt-4">
                        <h2 className="text-xs sm:text-sm">
                            {isDisconnected ? <span className="bg-red-400 text-white p-1 rounded-sm">Connect Wallet</span> : <span className="bg-green-400 text-white p-1 rounded-sm">Connect Wallet</span>} -
                            {alreadyRegister ? <span className="bg-green-400 text-white p-1 rounded-sm">Register</span> : <span className="bg-red-400 text-white p-1 rounded-sm">Register</span>} - 
                            {alreadyGenerateProof ? <span className="bg-green-400 text-white p-1 rounded-sm">Create Proof</span> : <span className="bg-red-400 text-white p-1 rounded-sm">Create Proof</span>} - 
                            {alreadyLogin ? <span className="bg-green-400 text-white p-1 rounded-sm">Login</span> : <span className="bg-red-400 text-white p-1 rounded-sm">Login</span>}
                        </h2>
                    </div>
                    <hr className="border-gray-300 mt-4" />

                    {/* explain */}
                    <div className="mt-4">
                        <h1 className="text-xl font-semibold">Built With Zero Knowledge Proof Technology</h1>
                        <p className="text-sm mt-2 opacity-75 leading-relaxed">
                            The application of zero-knowledge proofs on social media is the use of a cryptographic method that allows users to prove the validity of a specific claim to the platform or other users without having to disclose the personal data or sensitive information on which that claim is based.
                            <span className="font-semibold"> Simply: ur not need to input ur pesonal data to use the social media, but u can still prove that ur a real person and not a bot or fake account.</span>
                        </p>
                        <Link href="https://chain.link/education/zero-knowledge-proof-zkp" className="text-sm mt-2 opacity-75 text-blue-500 hover:underline">
                            More Explain
                        </Link>
                    </div>
                    <hr className="border-gray-300 mt-4" />
                    
                    {/* register */}
                    <div className="mt-4">
                        <button onClick={handleRegister} className="bg-[#4272FC] cursor-pointer text-sm text-white py-2 px-2 rounded-md hover:bg-[#3a68e6]">
                            Register with Your Wallet
                        </button>
                        {alreadyRegister ? <p className="text-green-500 mt-1 font-semibold text-sm">registered successfully!</p> : <p></p>}
                    </div>
                    <hr className="border-gray-300 mt-4" />

                    {/* create proof */}
                    <div className="mt-4">
                        <button onClick={handleGenerateProof} className="bg-[#4272FC] cursor-pointer text-sm text-white py-2 px-2 rounded-md hover:bg-[#3a68e6]">
                            Generate Proof
                        </button>

                        <div className="mt-2 w-full py-2 px-3 rounded-md text-sm md:text-base">
                            <p className="text-xs md:text-sm font-semibold">Proof:</p>
                            <pre className="bg-gray-100 text-xs md:text-sm p-4 overflow-auto">{JSON.stringify(proof ? proof : "ur not generating yet")}</pre>
                
                            <p className="text-xs md:text-sm font-semibold mt-2">Public Signals:</p>
                            <pre className="bg-gray-100 text-xs md:text-sm p-4 overflow-auto">{JSON.stringify(publicSignals ? publicSignals : "ur not generating yet")}</pre>
                        </div>
                    </div>
                    <hr className="border-gray-300 mt-4" />

                    {/* login */}
                    <div className="mt-4">
                        <button onClick={handleLogin} className="bg-[#4272FC] cursor-pointer text-sm text-white py-2 px-2 rounded-md hover:bg-[#3a68e6]">
                            Login With Proof
                        </button>
                        {alreadyLogin ? <p className="text-green-500 mt-1 font-semibold text-sm">login successfully!</p> : <p></p>}
                    </div>
                </div>
            </div>

            <ConnectWallet />
        </div>
    )
}

export default Wallet