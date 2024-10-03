import React from "react";
import { ContentWrapper } from "../../shared/ContentWrapper";
export const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <ContentWrapper>
            <div className="w-full h-[1px] bg-gray-700"></div>
            <footer>@ShoaibArif {year}, All right reserved.</footer>
        </ContentWrapper>
    )
}
