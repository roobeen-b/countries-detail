"use client";

import CountryItem from "./CountryItem";
import CardSkeleton from "./skeletons/CardSkeleton";
import { useFetch } from "@/hooks/useFetch";

const CountryList = () => {
  const { data: countries, loading, error }: TApiResponse = useFetch("all");

  if (loading)
    return (
      <div className="flex flex-wrap justify-center md:justify-between gap-6 sm:gap-4 lg:gap-6">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    );

  if (error) return <h1>{error}</h1>;

  return (
    <div className="flex flex-wrap justify-center md:justify-between gap-6 sm:gap-4 lg:gap-6">
      {countries &&
        countries.map((country: CountryProps) => (
          <CountryItem key={country.name.common} countryItem={country} />
        ))}
    </div>
  );
};

export default CountryList;
