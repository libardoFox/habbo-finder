import axios from "axios";

export default async function getPerfil(key, habboName) {
  if (habboName) {
    const response = await axios(
      `https://www.habbo.es/api/public/users?name=${habboName}`
    );
    return response?.data;
  }
}


export async function getFullPerfil(key, uniqueId) {
  if (uniqueId) {
    const response = await axios(
      `https://www.habbo.es/api/public/users/${uniqueId}/profile`
    );
    return response?.data;
  }
}
