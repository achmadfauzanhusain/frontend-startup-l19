import ConnectWallet from "@/components/connectWallet";

const CreatePost = () => {
    return (
    <div className="flex flex-col gap-2 md:flex-row">
      {/* post create */}
      <div className="w-full md:w-2/3 border-0 md:border-r px-2">
        
      </div>

      {/* connect wallet */}
      <ConnectWallet />
    </div>
    )
}

export default CreatePost