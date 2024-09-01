"use client";

import { useEffect, useState } from "react";
import CountryItem from "./CountryItem";
import { useFetch } from "@/hooks/useFetch";
import HomeSkeleton from "./skeletons/HomeSkeleton";

const CountryList = ({ inputValue, region }: CountryListProps) => {
  const { data: countries, loading, error }: TApiResponse = useFetch("all");

  const [filteredCountries, setFilteredCountries] = useState<CountryProps[]>(
    []
  );

  useEffect(() => {
    if (countries) {
      setFilteredCountries(countries);
    }
  }, [countries]);

  useEffect(() => {
    if (countries) {
      const filteredCountries = countries.filter((country: CountryProps) =>
        country.name.common.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredCountries(filteredCountries);
    }
  }, [inputValue, countries]);

  useEffect(() => {
    if (countries) {
      const fillteredCountries = countries.filter((country: CountryProps) =>
        country.region.toLowerCase().includes(region.toLowerCase())
      );

      setFilteredCountries(fillteredCountries);
    }
  }, [region, countries]);

  if (loading) return <HomeSkeleton />;

  if (error) return <h1>{error}</h1>;

  return (
    <div className="flex flex-wrap justify-center md:justify-between gap-6 sm:gap-4 lg:gap-6">
      {filteredCountries &&
        filteredCountries.map((country: CountryProps) => (
          <CountryItem key={country.name.common} countryItem={country} />
        ))}
    </div>
  );
};

export default CountryList;
