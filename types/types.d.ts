declare type TApiResponse = {
  data: any;
  error: any;
  loading: boolean;
};

declare type ButtonProps = {
  title: string;
  isBack: boolean;
};

declare type CountryItemProps = {
  countryName: string;
  countryFlag: string;
  population: number;
  region: string;
  capital: string;
};

declare type Currencies = {
  [key: string]: {
    name: string;
    symbol: string;
  };
};

declare type Languages = {
  [key: string]: string;
};

declare type NativeName = {
  [key: string]: {
    official: string;
    common: string;
  };
};

declare type Demonyms = {
  eng: {
    f: string;
    m: string;
  };
};

declare type Maps = {
  googleMaps: string;
  openStreetMaps: string;
};

declare type CountryProps = {
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Currencies;
  idd: {
    root: string;
    suffixes: string[];
  };
  capital: string[];
  altSpellings: string[];
  region: string;
  languages: Languages;
  translations: {
    [key: string]: {
      official: string;
      common: string;
    };
  };
  latlng: [number, number];
  landlocked: boolean;
  borders?: string[];
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  car: {
    signs: string[];
    side: string;
  };
  timezones: string[];
  continents: string[];
  flags: {
    png: string;
    svg: string;
  };
  capitalInfo: {
    latlng: [number, number];
  };
};
