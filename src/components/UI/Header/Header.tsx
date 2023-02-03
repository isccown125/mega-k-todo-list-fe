import React from "react";

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className=" flex justify-center w-full border-b-4 border-b-blue-900 bg-blue-500">
      {children}
    </header>
  );
};

export default Header;
