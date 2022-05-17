import StyledHeader from "./STYLEDCOMPONENTS/StyledHeader";

const Header = ({ toggleDarkMode, theme }) => {
  return (
    <StyledHeader>
      <h1>Where in the world?</h1>

      <button onClick={toggleDarkMode}>
        {theme === "light" ? (
          <div>
            <i className="fa fa-moon"></i> Dark Mode
          </div>
        ) : (
          <div>
            <i className="fa fa-sun"></i> Light Mode
          </div>
        )}
      </button>
    </StyledHeader>
  );
};

export default Header;
