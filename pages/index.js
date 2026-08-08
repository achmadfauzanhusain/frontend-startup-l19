import ConnectWallet from "@/components/connectWallet";
import MainContent from "@/components/mainContent";

export default function Home() {
  return (
    <div className="flex flex-col gap-2 md:flex-row">
      {/* main content */}
      <MainContent />

      {/* connect wallet */}
      <ConnectWallet />
    </div>
  );
}