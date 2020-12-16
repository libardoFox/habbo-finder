import React, { useState } from "react";
import SearchBoxComponent from "../Components/SearchBoxComponent";
import HabboDetails from "../../HabboDetails/Containers/HabboDetails";
import getPerfil from "../../../Helpers/Requests";
import { useQuery } from "react-query";
import Loader from "../../Loader/Loader";
//import Loader from "../../Loader/Loader";

function SearchBox() {
  const [habboName, setHabboName] = useState("");
  const { data: habboProfile, isLoading } = useQuery(
    ["profile", habboName],
    getPerfil,
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      retry: false,
    }
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
