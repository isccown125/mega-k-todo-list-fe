import React from "react";
import { Link } from "react-router-dom";

const LinkButton = ({
  href = "/",
  label,
  className,
}: {
  href: string;
  label: string;
  className?: string;
}) => {
  return (
    <Link className="text-2xl" to={href}>
      <button
        className={`bg-opacity-0  a${
          className ? ` ${className}` : ""
        } text-white hover:bg-amber-200 hover:text-black`}
      >
        {label}
      </button>
    </Link>
  );
};

export default LinkButton;
