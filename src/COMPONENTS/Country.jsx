import { Link } from "react-router-dom";

const Country = ({ flag, name, population, region, capital }) => {

  return (

    <li>

      <Link to={`/${name}`}>
      
      <img src={flag} alt="" />

      <div className="info">
        
        <h3>{name}</h3>

        <div>
          Population: <span>{population.toLocaleString()}</span>
        </div>

        <div>
          Region: <span>{region}</span>
        </div>

        <div>
          capital: <span>{capital}</span>
        </div>

      </div>
      
      </Link>

    </li>

  );

};

export default Country;
