import React from "react";

const HabboBadges = ({ badges }) => {
  return Array.isArray(badges)
    ? badges.map(({ code, description }) => {
        return (
          <div className="badge__container" key={code}>
            <img
              src={`https://images.habbo.com/c_images/album1584/${code}.png`}
              className="habbo-profile__badge"
              alt={code}
              title={description}
            />
          </div>
        );
      })
    : null;
};

export default HabboBadges;
