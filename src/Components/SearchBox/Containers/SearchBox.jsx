import React, { useState } from "react";
import SearchBoxComponent from "../Components/SearchBoxComponent";
import HabboDetails from "../../HabboDetails/Containers/HabboDetails";
import getPerfil from "../../../Helpers/Requests";
import config from "../../../Helpers/useQueryConfig";
import { useQuery } from "react-query";
import Loader from "../../Loader/Loader";

function SearchBox() {
  const [habboName, setHabboName] = useState("");
  const { data: habboProfile, isLoading } = useQuery(
    ["profile", habboName],
    getPerfil,
    config
  );
  const onChangeName = ({ target }) => {
    setHabboName(target.value);
  };

  return (
    <>
      <SearchBoxComponent {...{ onChangeName, habboName }} />

      {isLoading ? (
        <Loader />
      ) : (
        <HabboDetails
          habboProfile={{
            ...habboProfile,
            habboName,
          }}
        />
      )}
    </>
  );
}

export default SearchBox;
