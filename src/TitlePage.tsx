import React from "react";

function TitlePage() {
    return (
        <div className="titlePage">
            <header className="titlePage-header">
                <h1 className="titlePage-Header">The Cookbook</h1>
                <div className="searchBar-container">
                    <label htmlFor="searchbar">Search Recipes</label>
                    <input id="searchbar" name="searchbar" />
                </div>
            </header>
        </div>
    )
}

export default TitlePage