import React from "react";
import "./styles/navigation/navigation.scss"

interface Props {
    backLink: string,
    forwardLink: string
}

function BottomNavigation({ backLink, forwardLink }: Props) {
    return (
        <nav className="bottomNavigation">
            <button className="pageBackButton" onClick={navigateBack} disabled={backLink ? false: true}>
                <span className="pageBackButtonIcon"></span>
                <span className="screenReader-text">Previous Page</span>
            </button>
            <button className="pageForwardButton" onClick={navigateForward} disabled={forwardLink ? false: true}>
                <span className="pageForwardButtonIcon"></span>
                <span className="screenReader-text">Next Page</span>
            </button>
        </nav>
    )
}

const navigateBack = (event: React.MouseEvent) => {
    console.log(event) 
    return false
}
const navigateForward = (event: React.MouseEvent) => {
    console.log(event) 
    return false
}

export default BottomNavigation