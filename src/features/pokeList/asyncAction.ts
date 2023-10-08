import Service from "./service";
import { GetResponse, ServiceParams } from "./types";

export const getPokemons = async (
  dataParams: ServiceParams
): Promise<GetResponse> => {
  try {
    const { data } = await Service.getPokemonsService(dataParams);
    return data;
  } catch (error: any | null) {
    throw error;
  }
};
