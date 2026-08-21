import { ConnectButton } from '@rainbow-me/rainbowkit';

const ConnectWallet = () => {
    return (
      <div className="w-full md:w-1/3 hidden md:flex md:justify-center mt-4 md:mt-0">
        <div className="mt-12 fixed text-center">
            <ConnectButton accountStatus="address" showBalance="false" />

            <div className="mt-8 flex flex-col justify-center items-center">
              <div className="bg-orange-500 w-[120px] h-[120px] rounded-full"></div>
              <h2 className="font-bold text-2xl mt-3">TBLO</h2>
            </div>
        </div>
      </div>
    )
}

export default ConnectWallet