import ConnectWallet from "@/components/connectWallet";
import Sidebar from "../components/sidebar";
import MainContent from "@/components/mainContent";

export default function Home() {
  return (
    <div className="pt-[73px]">
      <div className="flex">
        <Sidebar />

        <div className="flex w-full ml-[25%] px-6">
          {/* main content */}
          <MainContent />

          {/* cek terhubung ke wallet atau tidak */}
          <ConnectWallet />
        </div>
      </div>
    </div>
  );
}