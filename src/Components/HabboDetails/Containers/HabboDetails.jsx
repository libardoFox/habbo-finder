import React from "react";
import HabboDetailsComponent from "../Components/HabboDetailsComponent";

const HabboDetails = ({ habboProfile, isLoading }) => {
  const {
    habboName,
    memberSince,
    motto,
    selectedBadges,
    uniqueId,
  } = habboProfile;
  const habboError = !habboProfile.hasOwnProperty("uniqueId");
  return (
    <HabboDetailsComponent
      {...{
        habboError,
        habboName,
        memberSince,
        motto,
        selectedBadges,
        uniqueId,
        isLoading,
      }}
    />
  );
};

export default HabboDetails;
