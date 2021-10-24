import React from "react";
import Sidebar from "../Sidebar/Sidebar";

const Page = ({ children }) => {
  return (
    <div>
      <Sidebar>{children}</Sidebar>
    </div>
  );
};

export default Page;
