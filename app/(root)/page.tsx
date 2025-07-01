import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedInUser = {
    firstName: "Karan",
    lastName: "Sayambar",
    email: "karan@gmail.com",
  }; // Simulating a logged-in user
  return (
    <section className="home border">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            title="Welcome"
            type="greeting"
            user={loggedInUser?.firstName || "Guest"}
            subtext={
              "Access and manage your account and transactions efficiently."
            }
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1123.45}
          />
        </header>
      </div>
      <RightSidebar
        user={loggedInUser}
        transactions={[]}
        banks={[{ currentBalance: 123.45 }, { currentBalance: 678.9 }]} // Simulating bank data
      />
    </section>
  );
};

export default Home;
