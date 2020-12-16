import React from "react";
import HabboBadges from "../../../HabboBadges/HabboBadges";

export default function ({ selectedBadges }) {
  return selectedBadges?.length > 0 ? (
    <div className="habbo-profile__badges">
      <HabboBadges badges={selectedBadges} />
    </div>
  ) : null;
}
