import React, { useState, useEffect } from "react";
import { CountryCard } from "./CountryCard";
import { Dropdown } from "./Dropdown";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export type Country = {
  name: {
    common: string;
  };
  population: string;
  cca3: string;
  region: string;
  alpha3Code: string;
  capital: string;
  flags: {
    svg: string;
  };
};

enum Region {
  Africa = "Africa",
  Americas = "Americas",
  Asia = "Asia",
  Europe = "Europe",
  Oceania = "Oceania",
  ResetFilter = "Reset Filter",
}

export const CountriesList = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState<Region>(Region.ResetFilter);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    getData();
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  function handleRegionChange(e: Event) {
    const target = e.target as HTMLDivElement;
    setRegion((target.textContent as Region) || Region.ResetFilter);
  }

  const filteredCountries = countries.filter((country) => {
    return (
      country.name.common.toLowerCase().includes(search.toLowerCase()) &&
      (region === Region.ResetFilter || country.region === region)
    );
  });

  return (
    <div className="px-10 py-16">
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="flex flex-col mb-4 lg:mb-0">
          <label htmlFor="search" className="flex">
            <MagnifyingGlassIcon className="lg:self-center mr-2" />
            Search for a country
          </label>
          <input
            type="text"
            id="search"
            name="search"
            autoComplete="off"
            onChange={handleSearchChange}
            className="h-12 px-2.5 py-6 lg:self-center border rounded border-border"
          />
        </div>
        <div className="lg:self-end">
          <Dropdown
            label={
              region && region !== "Reset Filter" ? region : "Filter by Region"
            }
            items={Object.values(Region)}
            onChange={handleRegionChange}
          />
        </div>
      </div>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 py-10 list-none">
        {filteredCountries.map((country) => (
          <CountryCard
            name={country.name.common}
            population={country.population}
            region={country.region}
            capital={country.capital}
            flagUrl={country.flags.svg}
            link={`/${country.cca3.toUpperCase()}`}
          />
        ))}
      </ul>
    </div>
  );
};
