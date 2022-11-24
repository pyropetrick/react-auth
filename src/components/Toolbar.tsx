import React from "react";
import { Icon } from "./Icon";

export const Toolbar = () => {
  return (
    <div className="my-4 d-flex justify-content-center">
      <Icon iconName="Lock" color="dark" size={30} />
      <Icon iconName="Unlock" color="blue" size={30} />
      <Icon iconName="Trash" color="red" size={30} />
    </div>
  );
};
