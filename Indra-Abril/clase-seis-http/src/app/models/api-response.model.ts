import { CharacterModel } from "./character.model";

export interface ApiResponseModel {
    info: {
      count: number;
      pages: number;
      next: string | null;
      prev: string | null;
    };
    results: CharacterModel[];
  }
  