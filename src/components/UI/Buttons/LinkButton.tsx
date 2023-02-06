import React from "react";
import { NavLink } from "react-router-dom";
import "./LinkButton.css";

const LinkButton = ({
  href = "/",
  label,
  className,
  isActive,
  onClick,
  children,
}: {
  href: string;
  label: string;
  className?: string;
  isActive: boolean;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  children: React.ReactNode;
}) => {
  return (
    <NavLink
      className={`${isActive ? "isActive" : ""} link-button`}
      to={href}
      onClick={onClick}
    >
      <button className={`${className ? ` ${className}` : ""} btn-style`}>
        {children}
        {label}
      </button>
    </NavLink>
  );
};

export default LinkButton;
