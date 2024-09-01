"use client";

import Button from "@/components/Button";
import CardSkeleton from "@/components/skeletons/CardSkeleton";
import { useFetch } from "@/hooks/useFetch";
import {
  getCurrencyName,
  getLanguageName,
  getNativeName,
} from "@/utils/helperFunctions";
import Image from "next/image";
import { useParams } from "next/navigation";

const CountryDetailPage = () => {
  const param = useParams();

  const {
    data: singleCountry,
    loading,
    error,
  }: TApiResponse = useFetch(`name/${param.country}`);

  if (loading || !singleCountry)
    return (
      <div className="flex flex-wrap justify-center md:justify-between gap-6 sm:gap-4 lg:gap-6">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    );

  if (error) return <h1>{error}</h1>;

  const {
    capital,
    flags,
    name,
    population,
    region,
    subregion,
    tld,
    currencies,
    languages,
    borders,
  } = singleCountry[0];

  return (
    <div className="p-4 md:p-16 lg:px-24 pt-4">
      <Button title={"Back"} isBack={true} />
      <div className="mt-10 flex flex-col gap-6 items-center justify-center md:flex-row md:justify-between ">
        {/* FLAG CONTAINER */}
        <div className="w-full flex justify-center md:w-1/2">
          <Image
            src={flags.png}
            alt="Flag"
            width={400}
            height={10}
            className=""
          />
        </div>

        {/* FLAG INFO */}
        <div className="w-full md:w-1/2">
          {/* FLAG TITLE */}
          <h1 className="font-semibold mb-4 text-lg">{name && name.common}</h1>

          {/* FLAG DESCRIPTION */}
          <div className="flex flex-col gap-2 md:flex-row md:justify-between">
            <div className="flex flex-col gap-2">
              <p className="text-xs">
                Native Name:{" "}
                {name && name.nativeName && getNativeName(name.nativeName)}
              </p>
              <p className="text-xs">Population: {population}</p>
              <p className="text-xs">Region: {region}</p>
              <p className="text-xs">Sub Region: {subregion}</p>
              <p className="text-xs">Capital: {capital[0]}</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xs">Top Level Domain: {tld}</p>
              <p className="text-xs">
                Currencies: {currencies && getCurrencyName(currencies)}
              </p>
              <p className="text-xs">Languages: {getLanguageName(languages)}</p>
            </div>
          </div>

          {/* FLAG BORDERS */}
          <div className="flex flex-col items-start md:flex-row md:items-center text-xs gap-4 mt-8 font-semibold">
            Border Countries:
            <div className="flex flex-wrap items-center gap-4">
              {borders &&
                borders.map((border: string) => (
                  <Button title={border} isBack={false} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetailPage;
