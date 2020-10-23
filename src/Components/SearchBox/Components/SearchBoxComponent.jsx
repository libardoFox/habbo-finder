import React from "react";

function SearchBoxComponent({ onChangeName, habboName, profile }) {
    return (
        <div className="searchbox-container">
            <div className="searchbox__container">
                <input
                    autoFocus
                    type="text"
                    placeholder="Find your habbo profile..."
                    className="searchbox__input"
                    maxLength="20"
                    minLength="1"
                    onChange={onChangeName}
                    value={habboName}
                />
                <button className="searchbox__search">
                    <i className="fa fa-search"></i>
                </button>
            </div>
        </div>
    );
}

export default SearchBoxComponent;
