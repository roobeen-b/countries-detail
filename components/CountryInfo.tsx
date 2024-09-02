"use client";

import { useFetch } from "@/hooks/useFetch";
import { useParams } from "next/navigation";
import {
  getCurrencyName,
  getLanguageName,
  getNativeName,
} from "@/utils/helperFunctions";
import Image from "next/image";
import DetailPageSkeleton from "./skeletons/DetailPageSkeleton";
import CountryBorders from "./CountryBorders";

const CountryInfo = () => {
  const param = useParams();

  const {
    data: singleCountry,
    loading,
    error,
  }: TApiResponse = useFetch(`name/${param.country}`);

  if (loading || !singleCountry) return <DetailPageSkeleton />;

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
    <div className="mt-10 flex flex-col gap-6 items-center justify-center md:flex-row md:justify-between ">
      {/* FLAG IMAGE CONTAINER */}
      <div className="w-full flex justify-center md:w-1/2">
        <Image
          src={flags.png}
          alt="Flag"
          width={400}
          height={10}
          className="shadow-md"
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
              <span className="text-dark-gray font-normal">
                {name && name.nativeName && getNativeName(name.nativeName)}
              </span>
            </p>
            <p className="text-xs">
              Population:{" "}
              <span className="text-dark-gray font-normal">{population}</span>
            </p>
            <p className="text-xs">
              Region:{" "}
              <span className="text-dark-gray font-normal">{region}</span>
            </p>
            <p className="text-xs">
              Sub Region:{" "}
              <span className="text-dark-gray font-normal">{subregion}</span>
            </p>
            <p className="text-xs">
              Capital:{" "}
              <span className="text-dark-gray font-normal">{capital[0]}</span>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xs">
              Top Level Domain:{" "}
              <span className="text-dark-gray font-normal">{tld}</span>
            </p>
            <p className="text-xs">
              Currencies:{" "}
              <span className="text-dark-gray font-normal">
                {currencies && getCurrencyName(currencies)}
              </span>
            </p>
            <p className="text-xs">
              Languages:{" "}
              <span className="text-dark-gray font-normal">
                {getLanguageName(languages)}
              </span>
            </p>
          </div>
        </div>

        {/* FLAG BORDERS */}
        <CountryBorders borders={borders} />
      </div>
    </div>
  );
};

export default CountryInfo;
