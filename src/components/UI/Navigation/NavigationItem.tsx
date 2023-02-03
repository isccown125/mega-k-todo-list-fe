import React from "react";
import LinkButton from "../Buttons/LinkButton";

const NavigationItem = ({ href, label }: { href: string; label: string }) => {
  return (
    <li>
      <LinkButton href={href} label={label} className={"p-2 border-blue"} />
    </li>
  );
};

export default NavigationItem;
