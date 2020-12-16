import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Loader = () => {
  return (
    <SkeletonTheme color="#fff" highlightColor="#f0f0f0">
      <p className="loader">
        <p className="loader-circle">
          <Skeleton circle={true} height={50} width={50} />
        </p>
        <p className="loader-bars">
          <Skeleton count={3} />
        </p>
      </p>
    </SkeletonTheme>
  );
};

export default Loader;
