import StyledHead from "../COMPONENTS/STYLEDCOMPONENTS/StyledHead";
import Search from "../COMPONENTS/Search";
import RegionFilter from "../COMPONENTS/RegionFilter";

const Home = ({
  countrySearch,
  handleCountrySearch,
  getRegion,
  region,
  showContinents,
  setShowContinents,
  totalCountries,
}) => {
  return (
    <>
      <StyledHead>
        <Search
          countrySearch={countrySearch}
          handleCountrySearch={handleCountrySearch}
        />
        <RegionFilter
          getRegion={getRegion}
          region={region}
          showContinents={showContinents}
          setShowContinents={setShowContinents}
          totalCountries={totalCountries}
        />
      </StyledHead>
    </>
  );
};

export default Home;
