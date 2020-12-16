import React from "react";
import { Link } from "react-router-dom";

export default function ({
  habboName,
  habboError,
  uniqueId,
  motto,
  memberSince,
}) {
  return (
    <div className="habbo-profile__details">
      <h2 className="habbo-name">
        {!habboError ? (
          <Link to={`/user/${uniqueId}`} className="habbo-name__text">
            {habboName.toLowerCase()}
          </Link>
        ) : (
          <span className="habbo-name__text">Profile not found.</span>
        )}
      </h2>
      <p className="habbo-motto">
        {!habboError
          ? motto
          : "The profile you are looking for may be banned or the user has it private."}
      </p>
      <p className="habbo-date">
        {memberSince && new Date(memberSince).toLocaleString()}
      </p>
    </div>
  );
}
