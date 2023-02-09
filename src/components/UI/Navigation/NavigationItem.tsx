import React from "react";
import LinkButton from "../Buttons/LinkButton";
import styles from "./NavigationItem.module.css";

const NavigationItem = ({
  href,
  label,
  isActive,
  onClick,
  children,
}: {
  href: string;
  label: string;
  isActive: boolean;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  children?: React.ReactNode;
}) => {
  return (
    <li className={styles.item}>
      <LinkButton
        href={href}
        label={label}
        isActive={isActive}
        onClick={onClick}
      >
        {" "}
        {children}
      </LinkButton>
    </li>
  );
};

export default NavigationItem;
