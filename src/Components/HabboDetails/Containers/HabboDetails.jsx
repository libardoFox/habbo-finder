import React from "react";
import HabboDetailsComponent from "../Components/HabboDetailsComponent";

const HabboDetails = ({ habboProfile, loading }) => {
  const { habboName, memberSince, motto, selectedBadges } = habboProfile;
  const habboError = habboProfile.hasOwnProperty("error");

  return (
    <HabboDetailsComponent
      {...{
        habboError,
        habboName,
        memberSince,
        motto,
        selectedBadges,
        loading,
      }}
    />
  );
};

export default HabboDetails;
