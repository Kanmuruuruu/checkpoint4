import {host, serverView} from '../config';

export const findAll = async () => {
  try {
    const response = await fetch(`${host}/api/player`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': serverView
      }
    });
    return await response.json();
  } catch (error) {
    return [];
  }
};
