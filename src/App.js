import { useState, useEffect, useCallback } from "react";
import Header from "./COMPONENTS/Header";
import Countries from "./COMPONENTS/Countries";
import Home from "./PAGES/Home";
import CountryDetails from "./PAGES/CountryDetails";
import { Routes, Route } from "react-router-dom";

function App() {
  const [countries, setCountries] = useState([]);
  const [countrySearch, setCountrySearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [region, setRegion] = useState("");
  const [showContinents, setShowContinents] = useState(false);
  const [theme, setTheme] = useState(
    sessionStorage.getItem("theme") || "light"
  );
  const [totalCountries, setTotalCountries] = useState(0);
  const html = document.querySelector("html");

  const toggleDarkMode = useCallback(() => {
    setTheme(prev => {
      if (prev === "light") {
        return "dark"
      } else if(prev === "dark") {
        return "light"
      }
    });
  }, []);
  const getRegion = useCallback((e) => {
    setRegion(e.target.value);
    setShowContinents(false);
  }, []);

  const totalCountriesLength = useCallback((length) => {
    setTotalCountries(length);
  }, []);

  useEffect(() => {
    sessionStorage.setItem("theme", theme)
    if (theme === "dark") {
      html.classList.add("dark-mode");
    } else {
      html.classList.remove("dark-mode");
    }
  }, [theme, html.classList]);

  const handleCountrySearch = useCallback((e) => {
    setCountrySearch(e.target.value);
  }, []);

  const getCountries = useCallback(async () => {
    setLoading(true);
    const res = await fetch("https://restcountries.com/v2/all");

    const countries = await res.json();

    setCountries(countries);
    setLoading(false);
  }, []);

  useEffect(() => {
    getCountries();
  }, [getCountries]);

  return (
    <>
      <Header toggleDarkMode={toggleDarkMode} theme={theme} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home
                countrySearch={countrySearch}
                handleCountrySearch={handleCountrySearch}
                getRegion={getRegion}
                region={region}
                showContinents={showContinents}
                setShowContinents={setShowContinents}
                totalCountries={totalCountries}
              />

              <Countries
                countries={countries}
                search={countrySearch}
                loading={loading}
                region={region}
                setTotalCountries={setTotalCountries}
                totalCountriesLength={totalCountriesLength}
              />
            </>
          }
        />

        <Route
          path="/:name"
          element={<CountryDetails countries={countries} />}
        />
      </Routes>
    </>
  );
}

export default App;