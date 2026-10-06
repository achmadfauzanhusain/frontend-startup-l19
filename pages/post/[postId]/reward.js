import ConnectWallet from "@/components/connectWallet"

const Reward = () => {
    return (
        <div className="flex flex-col gap-2 md:flex-row pb-12">
            <div className="w-full md:w-2/3 border-0 md:border-r border-gray-200 px-4 md:px-6">

            </div>

            <ConnectWallet />
        </div>
    )
}

export default Reward