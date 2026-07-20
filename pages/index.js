export default function Home() {
  return (
    <div className="pt-[73px]">
      <div className="flex">
        <div className="w-1/4 border-r h-[calc(100vh-73px)] fixed top-[73px] left-0 px-6 bg-white">
          <h1 className="mt-2">Sidebar</h1>
        </div>

        <div className="flex w-full ml-[25%] px-6">
          {/* main content */}
          <div className="w-2/3 border-r">
            <h1 className="mt-2">Main Content</h1>
          </div>

          {/* cek terhubung ke wallet atau tidak */}
          <div className="w-1/3 flex px-6">
            <h1 className="mt-2">Connect Wallet</h1>
          </div>
        </div>
      </div>
    </div>
  );
}