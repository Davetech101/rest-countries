import { useEffect } from "react";
import StyledCountries from "./STYLEDCOMPONENTS/StyledCountries";
import StyledLoading from "./STYLEDCOMPONENTS/StyledLoading";
import Country from "./Country";

const Countries = ({
  countries,
  search,
  loading,
  region,
  totalCountriesLength,
}) => {
  const filteredByRegion =
    region.length > 0
      ? countries.filter((country) =>
          country.region.toLowerCase().includes(region.toLowerCase())
        )
      : [];

  const filteredBySearch =
    filteredByRegion.length > 0
      ? filteredByRegion.filter((country) =>
          country.name.toLowerCase().includes(search.toLowerCase())
        )
      : countries.filter((country) =>
          country.name.toLowerCase().includes(search.toLowerCase())
        );
  useEffect(() => {
    totalCountriesLength(filteredBySearch.length);
  }, [filteredBySearch.length, totalCountriesLength]);

  const finalDisplay = (
    <StyledCountries>
      {filteredBySearch.length > 0 ? (
        filteredBySearch.map((country, idx) => {
          return (
            <Country
              key={idx}
              flag={country.flag}
              name={country.name}
              population={country.population}
              region={country.region}
              capital={country.capital}
            />
          );
        })
      ) : (
        <p>No country matches your search!!</p>
      )}
    </StyledCountries>
  );

  return <div>{loading ? <StyledLoading /> : finalDisplay}</div>;
};

export default Countries;
