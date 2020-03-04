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

export const findAllName = async () => {
  try {
    const response = await fetch(`${host}/api/player?info=name`, {
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
  try {
    const response = await fetch(`${host}/api/player`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": serverView
      },
      body: JSON.stringify(newPlayer)
    });
    if (response.ok) return await response.json();
    return "error";
  } catch (error) {
    return "error";
  }
};

export const deletePlayer = async playerId => {
  try {
    const response = await fetch(`${host}/api/player/${playerId}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": serverView
      }
    });
    if (response.ok) return await response.json();
    return "error";
  } catch (error) {
    return "error";
  }
};
