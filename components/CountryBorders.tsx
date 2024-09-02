"use client";

import { useEffect, useState } from "react";
import Button from "./Button";
import LineSkeleton from "./skeletons/LineSkeleton";
import Link from "next/link";

const CountryBorders = ({ borders }: TBorderProp) => {
  const [borderNames, setBorderNames] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>();

  useEffect(() => {
    const findBorderPromise = async (border: string) => {
      try {
        const res = await fetch(
          `https://restcountries.com/v3.1/alpha/${border}`
        );
        if (!res.ok) {
          throw new Error("Unable to fetch data.");
        }
        const data = await res.json();
        return data[0].name.common;
      } catch (error) {
        setError((error as Error).message);
      }
    };

    const findBorderNames = async () => {
      try {
        if (borders) {
          setLoading(true);
          const borderPromises = borders.map((border) =>
            findBorderPromise(border)
          );
          const names = await Promise.all(borderPromises);
          setBorderNames(names);
          setLoading(false);
        }
      } catch (error) {
        setError((error as Error).message);
        setLoading(false);
      }
    };

    findBorderNames();
  }, []);

  if (loading) return <LineSkeleton />;

  if (error) return <h1>{error}</h1>;

  return (
    <div className="flex flex-col items-start md:flex-row md:items-center text-xs gap-4 mt-8 font-semibold">
      Border Countries:
      <div className="flex flex-wrap items-center gap-4">
        {borderNames &&
          borderNames.map((border: string) => (
            <Link key={border} href={`/country-detail/${border}`}>
              <Button title={border} isBack={false} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default CountryBorders;
