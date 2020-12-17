import React from "react";
import { useParams } from "react-router-dom";
import { getFullPerfil } from "../../../Helpers/Requests";
import { useQuery } from "react-query";
import config from "../../../Helpers/useQueryConfig";

const HabboProfile = () => {
  const { id } = useParams();
  const { isLoading, isError, data } = useQuery(
    ["perfil", id],
    getFullPerfil,
    config
  );
  console.log(data);

  if (isLoading) return "Cargando...";
  if (isError) return "Error de conexión";
  
  return (
    <>
      <div className="habbo-perfil-container">
        <div className="habbo-perfil-image">
          <img
            src={`https://www.habbo.es/habbo-imaging/avatarimage?user=${data.user.name}&direction=2&head_direction=2&gesture=sml&action=&size=l`}
            alt=""
          />
        </div>
        <div className="habbo-perfil">
          <h1 className="title">{data.user.name}</h1>
          <p>
            <b className="habbo-perfil-data">Fecha:</b>
            <time datetime={data.user.memberSince}>
              {new Date(data.user.memberSince).toLocaleString()}
            </time>
          </p>
        </div>
      </div>
    </>
  );
};

export default HabboProfile;
