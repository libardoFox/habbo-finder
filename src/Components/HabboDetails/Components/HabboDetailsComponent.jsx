import React from "react";
import HabboImage from "../../HabboImage/HabboImage";
import HabboBadges from "../../HabboBadges/HabboBadges";
import Loader from "../../Loader/Loader";

const HabboDetailsComponent = (props) => {
    const { habboName, memberSince, motto, selectedBadges, loading, habboError } = props;
    console.log(loading);
    console.log(habboName);
    return habboName ? (
        <div className="habbo-profile">
            {loading ? (
                <Loader />
            ) : (
                <>
                    <HabboImage habboName={habboName} habboError={habboError}/>
                    <div className="habbo-profile__details">
                        <h2 className="habbo-name">
                            {!habboError ? habboName : "Profile not found."}
                        </h2>
                        <p className="habbo-motto">
                            {!habboError
                                ? motto
                                : "The profile you are looking for may be banned or the user has it private."}
                        </p>
                        <p className="habbo-date">
                            {memberSince &&
                                new Date(memberSince).toLocaleString()}
                        </p>
                    </div>
                    <div className="habbo-profile__badges">
                        <HabboBadges badges={selectedBadges} />
                    </div>
                </>
            )}
        </div>
    ) : null;
};

export default HabboDetailsComponent;
