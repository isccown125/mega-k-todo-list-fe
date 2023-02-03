import React from "react";

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="rounded bg-category flex flex-col p-3 w-max justify-center items-start">
      {children}
    </div>
  );
};

export default Card;
