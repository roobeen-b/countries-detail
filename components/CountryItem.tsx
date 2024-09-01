import Image from "next/image";
import Link from "next/link";
import React from "react";

type CountryItemProps = {
  countryItem: CountryProps;
};

const CountryItem = ({ countryItem }: CountryItemProps) => {
  return (
    <Link
      href={`/country-detail/${countryItem.name.common}`}
      className="rounded-md"
    >
      <div className="w-64 h-40 overflow-hidden rounded-t-md">
        <Image
          src={countryItem.flags.png}
          alt="Flag"
          width={260}
          height={150}
          className="object-fill w-full h-full"
        />
      </div>
      <div className="p-8 bg-dark-blue shadow-md text-white rounded-b-md">
        <h1 className="font-semibold mb-4">{countryItem.name.common}</h1>
        <p className="text-xs mb-2">
          Population:{" "}
          <span className="text-dark-gray">{countryItem.population}</span>
        </p>
        <p className="text-xs mb-2">
          Region: <span className="text-dark-gray">{countryItem.region}</span>
        </p>
        <p className="text-xs">
          Capital: <span className="text-dark-gray">{countryItem.capital}</span>
        </p>
      </div>
    </Link>
  );
};

export default CountryItem;
