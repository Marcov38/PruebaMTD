import { Pokemon } from "../pokeList/types";
import Service from "./service";

export const getPokemonsDetails = async (
  id: string | undefined
): Promise<Pokemon> => {
  try {
    const { data } = await Service.getPokemonsDetailService(id);
    return data;
  } catch (error: any | null) {
    throw error;
  }
};
