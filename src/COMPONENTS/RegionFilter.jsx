import StyledFilterRegion from "./STYLEDCOMPONENTS/StyledFilterRegion";
import { useCallback } from "react";

const RegionFilter = ({
  getRegion,
  showContinents,
  setShowContinents,
  region,
  totalCountries,
}) => {
  const continents = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  const toggleContinents = useCallback(() => {
    setShowContinents((prev) => !prev);
  }, [setShowContinents]);

  const outsideClick = useCallback(
    (e) => {
      if (
        e.target.className === "fa fa-angle-up" ||
        e.target.className === "fa fa-angle-down" ||
        e.target.className === "filter-reg" ||
        e.target.className === "filter-btn" ||
        e.target.className === "no-cont" ||
        e.target.className === "no"
      ) {
        return;
      } else {
        setShowContinents(false);
      }
    },
    [setShowContinents]
  );

  document.addEventListener("click", outsideClick);

  const continentsList = (
    <ul>
      {continents.map((continent, id) => (
        <li key={id}>
          <button
            value={continent}
            className="continent-btn"
            onClick={(e) => getRegion(e)}
          >
            {continent}
          </button>
        </li>
      ))}

      {region.length > 0 ? (
        <li>
          <button
            value=""
            className="continent-btn"
            onClick={(e) => getRegion(e)}
          >
            Reset
          </button>
        </li>
      ) : (
        ""
      )}
    </ul>
  );

  return (
    <StyledFilterRegion>
      <button className="filter-btn" onClick={toggleContinents}>
        <span className="filter-reg">
          {region.length > 0 ? (
            <div className="no-cont">
              {region} <span className="no">({totalCountries})</span>
            </div>
          ) : (
            <div className="no-cont">
              Filter by Region<span className="no">({totalCountries})</span>
            </div>
          )}
        </span>

        {showContinents ? (
          <i className="fa fa-angle-up"></i>
        ) : (
          <i className="fa fa-angle-down"></i>
        )}
      </button>

      {showContinents ? continentsList : ""}
    </StyledFilterRegion>
  );
};

export default RegionFilter;
