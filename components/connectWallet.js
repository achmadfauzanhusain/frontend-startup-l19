import { ConnectButton } from '@rainbow-me/rainbowkit';

const ConnectWallet = () => {
    return (
      <div className="w-full md:w-1/3 hidden md:flex md:justify-center mt-4 md:mt-0">
        <div className="mt-6 fixed text-center w-72 mr-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="bg-orange-500 w-14 h-14 rounded-full shrink-0"></div>
              <div className="text-left">
                <h2 className="font-bold text-lg leading-tight text-gray-900">TBLO</h2>
                <p className="text-xs text-gray-400">Hubungkan wallet kamu</p>
              </div>
            </div>

            <div className="my-3 h-px w-full bg-gray-100"></div>

            <div className="flex justify-center">
              <ConnectButton accountStatus="address" showBalance="false" />
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm text-left">
            <h3 className="text-sm font-bold text-gray-900">Our Partnership</h3>
            <ul className="mt-3 space-y-3">
              {[{ name: '', link: '#', category: '' }, { name: '', link: '#', category: '' }, { name: '', link: '#', category: '' }].map((tag, i) => (
                <li key={tag.name} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{tag.name}</p>
                    <p className="text-xs text-gray-400">{tag.category}</p>
                  </div>
                  <a href={tag.link} className="text-xs text-sky-500 font-semibold">
                    See
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
}

export default ConnectWallet