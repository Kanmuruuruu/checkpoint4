import { host, serverView } from "../config";

export const findAll = async () => {
  try {
    const response = await fetch(`${host}/api/player`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": serverView
      }
    });
    return await response.json();
  } catch (error) {
    return error;
  }
};

export const postPlayer = async newPlayer => {
  console.log(newPlayer);
  try {
    const response = await fetch(`${host}/api/player`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": serverView
      },
      body: JSON.stringify(newPlayer)
    });
    return await response.json();
  } catch (error) {
    return error;
  }
};
