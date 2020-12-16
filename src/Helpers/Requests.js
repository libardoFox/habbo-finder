import axios from "axios";

export default async function getPerfil(key, habboName) {
  if (habboName) {
    const response = await axios(
      `https://www.habbo.es/api/public/users?name=${habboName}`
    );
    return response?.data;
  }
}
