import MainContent from "@/components/mainContent";

export default function Home() {
  return (
    <div className="flex flex-col gap-2 md:flex-row">
      {/* main content */}
      <MainContent />

      {/* connect wallet */}
      <div className="w-full bg-blue-200 md:w-1/3 hidden md:flex md:justify-center mt-4 md:mt-0">
        <h1>Connect Wallet</h1>
      </div>
    </div>
  );
}