export interface Zoo{
  name: string;
  country: string;
  postcode: string;
  timezone: string;
  animals: Animal[];
}

export interface Animal{
  id: number;
  commonName: string;
  binomialName: string;
  kingdom: string;
  phylum: string;
  class: string;
  order: string;
  family: string;
  genus: string;
  species: string;
}

export interface Enclosure{
  id: number;
  generalName: string;
  animals: Animal[];
}
