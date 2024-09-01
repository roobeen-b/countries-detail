"use client";

import Button from "@/components/Button";
import HomeSkeleton from "@/components/skeletons/HomeSkeleton";
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

  if (loading || !singleCountry) return <HomeSkeleton />;

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
        {/* FLAG IMAGE CONTAINER */}
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
                <span className="text-dark-gray">
                  {name && name.nativeName && getNativeName(name.nativeName)}
                </span>
              </p>
              <p className="text-xs">
                Population: <span className="text-dark-gray">{population}</span>
              </p>
              <p className="text-xs">
                Region: <span className="text-dark-gray">{region}</span>
              </p>
              <p className="text-xs">
                Sub Region: <span className="text-dark-gray">{subregion}</span>
              </p>
              <p className="text-xs">
                Capital: <span className="text-dark-gray">{capital[0]}</span>
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xs">
                Top Level Domain: <span className="text-dark-gray">{tld}</span>
              </p>
              <p className="text-xs">
                Currencies:{" "}
                <span className="text-dark-gray">
                  {currencies && getCurrencyName(currencies)}
                </span>
              </p>
              <p className="text-xs">
                Languages:{" "}
                <span className="text-dark-gray">
                  {getLanguageName(languages)}
                </span>
              </p>
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
