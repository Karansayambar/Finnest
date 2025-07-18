import MobileNavBar from "@/components/MobileNavBar";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstNme: "John", lastName: "Doe" }; // Simulating a logged-in user
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />
      <div className="flex w-full full-size flex-col">
        <div className="root-layout">
          <Image src={"/icons/logo.svg"} width={30} height={30} alt="logo" />
          <div>
            <MobileNavBar user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
