import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import StyledCountryDetails from "../COMPONENTS/STYLEDCOMPONENTS/StyledCountryDetails";

const CountryDetails = ({ countries }) => {
  const { name } = useParams();
  const navigate = useNavigate();

  const countryDetail = countries.filter((country) => {
    return country?.name === name;
  });

  const country = countryDetail[0];
  const currencies = country?.currencies?.map((currency, idx) => {
    return <span key={idx}>{`${currency.name}(${currency.symbol})`}</span>;
  });

  const languages = country?.languages.map((lang, idx, langs) => {
    if (idx === langs.length - 1) {
      return <span key={idx}>{lang.name}</span>;
    } else {
      return <span key={idx}>{lang.name + ", "}</span>;
    }
  });

  const borderCountries = country?.borders?.map((border, idx) => {
    const countryName = countries.filter((country, idx) => {
      const filtdCountry = country.alpha3Code === border;

      return filtdCountry;
    })[0].name;
    return (
      <Link to={`/${countryName}`} key={countryName}>
        {countryName}
      </Link>
    );
  });

  return (
    <StyledCountryDetails>
      <button
        className="back"
        onClick={() => {
          navigate(-1);
        }}
      >
        <i className="fa fa-arrow-left"></i>
        Back
      </button>

      <div className="cont">
        <img src={country?.flag} alt="" />

        <div className="parts">
          <h2>{country?.name}</h2>

          <div className="details">
            <div className="pt">
              <div>
                Native Name: <span>{country?.nativeName}</span>
              </div>

              <div>
                Population: <span>{country?.population.toLocaleString()}</span>
              </div>

              <div>
                Region: <span>{country?.region}</span>
              </div>

              <div>
                Sub Region: <span>{country?.subregion}</span>
              </div>

              <div>
                Capital: <span>{country?.capital}</span>
              </div>
            </div>

            <div className="pt">
              <div>
                Top Level Domain: <span>{country?.topLevelDomain}</span>
              </div>

              <div>Currency: {currencies}</div>

              <div>Languages: {languages}</div>
            </div>
          </div>

          <div>
            <span>Border Countries:</span>
            <span className="links">{borderCountries}</span>
          </div>
        </div>
      </div>

    </StyledCountryDetails>
  );
};

export default CountryDetails;
