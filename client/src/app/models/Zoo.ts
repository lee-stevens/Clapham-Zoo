import { Animal } from "./Animals";

export interface Zoo{
  name: string;
  country: string;
  postcode: string;
  timezone: string;
  animals: Animal[];
}

export interface Enclosure{
  id: number;
  generalName: string;
  animals: Animal[];
}
