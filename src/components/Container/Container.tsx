import React, { ReactNode } from "react";
import "./Container.css";

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="my-container">{children}</div>;
};

export default Container;
