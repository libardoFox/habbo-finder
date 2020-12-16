import React from "react";
import HabboNotFound from "../../Images/habbo-no-found.gif";

const HabboImage = ({ habboName, habboError }) => {
  return habboError ? (
    <img
      src={HabboNotFound}
      alt="Habbo no fount"
      title="Habbo Profile Not Found"
    />
  ) : (
    <img
      src={`https://www.habbo.es/habbo-imaging/avatarimage?user=${habboName}&direction=2&head_direction=2&gesture=sml&action=&size=l`}
      alt="You are"
      title="Habbo Profile Image"
      className="habbo-found"
    />
  );
};

export default HabboImage;
