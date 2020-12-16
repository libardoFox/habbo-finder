import React from "react";
import HabboImage from "../../HabboImage/HabboImage";
import HabboDescription from "./Components/HabboDescriptionComponent";
import HabboBages from "./Components/HabboBadgesComponent";

const HabboDetailsComponent = (props) => {
  const {
    habboName,
    memberSince,
    motto,
    selectedBadges,
    uniqueId,
    habboError,
  } = props;

  return habboName ? (
    <div className="habbo-profile">
      <HabboImage habboName={habboName} habboError={habboError} />
      <HabboDescription
        {...{ habboName, habboError, uniqueId, motto, memberSince }}
      />
      <HabboBages selectedBadges={selectedBadges} />
    </div>
  ) : null;
};

export default HabboDetailsComponent;
