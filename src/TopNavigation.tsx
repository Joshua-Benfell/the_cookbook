import React from "react";
import { getAlphabetNavOptions } from "./network/navigation"
import "./styles/navigation/navigation.scss"


function TopNavigation() {
    return (
        <nav className="topNavigation">
            <div className="homeButtonContainer">
                <button>
                    <span className="screenReader-text">
                        Home
                    </span>
                </button>
            </div>
            <div className="menuButtonContainer">
                <button>
                    <span className="screenReader-text">
                        Menu
                    </span>
                </button>
            </div>
            <ul>
                {
                    getAlphabetNavOptions.map(
                        (item, index) => (
                            <li key={index}>
                                <a href="#">{item}</a>
                            </li>
                        )
                    )
                }
            </ul>
        </nav>
    );
}

export default TopNavigation