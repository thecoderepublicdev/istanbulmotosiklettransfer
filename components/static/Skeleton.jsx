import React from "react"
import ContentLoader from "react-content-loader"

function HeaderView() {
    return(
        <ContentLoader 
            speed={1}
            width={1920}
            height={80}
            viewBox="0 0 1920 80"
            backgroundColor="#ededed"
            foregroundColor="#adadad"
        >
            <rect x="10" y="26" rx="17" ry="17" width="192" height="34" /> 
            <rect x="477" y="26" rx="17" ry="17" width="108" height="34" /> 
            <rect x="362" y="28" rx="17" ry="17" width="108" height="34" />
        </ContentLoader>
    )
}
export default function Skeleton() {
    return(
        <HeaderView/>
    )
}
