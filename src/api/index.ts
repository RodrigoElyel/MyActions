import axios from "axios";

export const getFeriados = async (date: string) => {
  var ano = date.split("-")[2];
  const response = await axios.get(
    `https://brasilapi.com.br/api/feriados/v1/${ano}`
  );
  return response.data;
};
