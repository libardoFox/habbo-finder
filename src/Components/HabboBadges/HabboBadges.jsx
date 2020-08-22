import React from "react";

const HabboBadges = ({ badges }) => {
    return Array.isArray(badges)
        ? badges.map(({ code }) => {
              return (
                  <div className="badge__container" key={code}>
                      <img
                          src={`https://habboo-a.akamaihd.net/c_images/album1584/${code}.png`}
                          className="habbo-profile__badge"
                          alt={code}
                      />
                  </div>
              );
          })
        : null;
};

export default HabboBadges;
