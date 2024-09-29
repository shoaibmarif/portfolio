import React from "react";
import { Wrapper } from "../../shared/Wrapper";
import { ContentWrapper } from "../../shared/ContentWrapper";
export const Footer = () =>{
    const year = new Date().getFullYear();
    return(
        <ContentWrapper>
        <div className="w-full h-[1px] bg-gray-500"></div>
        <Wrapper classes="text-center text-white py-4 px-3">
                <footer>@ShoaibArif {year}, All right reserved.</footer>
        </Wrapper>
        </ContentWrapper>
    )
}
