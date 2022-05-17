import StyledInput from "./STYLEDCOMPONENTS/StyledInput";

const Search = ({ countrySearch, handleCountrySearch }) => {
  return (
    <StyledInput>
      <label htmlFor="search">
        <i className="fa fa-search"></i>
      </label>
      <input
        type="text"
        autoComplete="off"
        id="search"
        placeholder="Search for a country..."
        value={countrySearch}
        onChange={(e) => handleCountrySearch(e)}
      />
    </StyledInput>
  );
};

export default Search;