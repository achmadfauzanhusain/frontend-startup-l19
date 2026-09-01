import ConnectWallet from "@/components/connectWallet";

const Wallet = () => {
    return (
        <div className="flex flex-col gap-2 md:flex-row pb-12">
            <div className="w-full md:w-2/3 border-0 md:border-r px-2">
                
            </div>
            <ConnectWallet />
        </div>
    )
}

export default Wallet