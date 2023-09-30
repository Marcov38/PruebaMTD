export interface ServiceParams {
  offset: number;
  limit: number;
}

export interface GetResponse {
  count: number;
  next: string;
  previous: any | null;
  results: IResponseItems[];
}

export interface IResponseItems {
  name: string;
  url: string;
}

//Export de todos los types de lo que devuelve la API

export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: Ability[];
  forms: PokemonForm[];
  game_indices: GameIndex[];
  held_items: HeldItem[];
  location_area_encounters: string;
  moves: Move[];
  species: PokemonSpecies;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  past_types: PastType[];
}

interface Ability {
  is_hidden: boolean;
  slot: number;
  ability: {
    name: string;
    url: string;
  };
}

interface PokemonForm {
  name: string;
  url: string;
}

interface GameIndex {
  game_index: number;
  version: {
    name: string;
    url: string;
  };
}

interface HeldItem {
  item: {
    name: string;
    url: string;
  };
  version_details: VersionDetail[];
}

interface VersionDetail {
  rarity: number;
  version: {
    name: string;
    url: string;
  };
}

interface Move {
  move: {
    name: string;
    url: string;
  };
  version_group_details: VersionGroupDetail[];
}

interface VersionGroupDetail {
  level_learned_at: number;
  version_group: {
    name: string;
    url: string;
  };
  move_learn_method: {
    name: string;
    url: string;
  };
}

interface PokemonSpecies {
  name: string;
  url: string;
}

interface Sprites {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
  other: {
    dream_world: {
      front_default: string | null;
      front_female: string | null;
    };
    home: {
      front_default: string | null;
      front_female: string | null;
      front_shiny: string | null;
      front_shiny_female: string | null;
    };
    official_artwork: {
      front_default: string | null;
    };
  };
  versions: {
    [key: string]: {
      [key: string]: string | null;
    };
  };
}

interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

interface Type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

interface PastType {
  generation: {
    name: string;
    url: string;
  };
  types: Type[];
}
