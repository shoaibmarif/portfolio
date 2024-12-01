import React from "react";
import { ContentWrapper } from "../../shared/ContentWrapper";
export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <React.Fragment>
      <ContentWrapper>
        <div className="w-full h-[1px]  dark:bg-gray-300 text-center mt-8 bg-[#0c0c0c]"></div>
        <footer className="text-[#0c0c0c]  dark:text-gray-300 text-center py-3">
          © <span className="font-bold">{year}</span> Shoaib Arif. All rights
          reserved.
        </footer>
      </ContentWrapper>
    </React.Fragment>
  );
};
