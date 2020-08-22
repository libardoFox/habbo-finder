import React, { useState, useEffect, useCallback } from "react";

// components
import SearchBoxComponent from "../Components/SearchBoxComponent";
import HabboDetails from "../../HabboDetails/Containers/HabboDetails";

function SearchBox() {
    const [habboName, setHabboName] = useState("");
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(false);
    

    const onChangeName = ({ target }) => {
        setHabboName(target.value);
    };

    const getProfile = useCallback(async () => {
        if (habboName !== "") {
            setLoading(true);
            const response = await fetch(
                `https://www.habbo.es/api/public/users?name=${habboName}`
            );
            const jsonProfile = await response.json();
            setProfile(jsonProfile);
            setLoading(false);
        }
    }, [habboName]);

    /**
     * The function is only invoked if the value of habboName changed
     * --> [habboName]
     */
    useEffect(() => {
        (async () => {
            await getProfile();
        })();
    }, [getProfile]);

    return (
        <>
            <SearchBoxComponent {...{ onChangeName, habboName, profile }} />
            <HabboDetails
                {...{ loading }}
                habboProfile={{
                    ...profile,
                    habboName,
                }}
            />
        </>
    );
}

export default SearchBox;
