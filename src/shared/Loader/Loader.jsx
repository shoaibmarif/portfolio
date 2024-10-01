import React from "react";
import "./Loader.css";
export const Loader = () => {
    return (
        <div className="loader__wrapper fixed h-[100vh] w-[100vw] bg-[#101010]">
            <span className="loader before:bg-violet-600 after:bg-violet-800"></span>
        </div>
    )
}