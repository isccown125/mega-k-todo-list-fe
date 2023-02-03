import React from "react";
import Header from "../components/UI/Header/Header";
import Navigation from "../components/UI/Navigation/Navigation";
import Banner from "../components/UI/Banner/Banner";
import Footer from "../components/UI/Footer/Footer";

// interface Props{
//     children: React.ReactNode;
// }

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header>
        <Navigation></Navigation>
      </Header>
      <Banner />
      <main className="h-full">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
