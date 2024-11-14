import { useState } from 'react';
import './Country.css'
const Country = ({country , handleVisitedCountries , handleVisitedFlags }) => {
    const {name , flags , population , area , cca3 } = country;

    const [visited , setVisited] = useState(false)

    const handleVisited = () => {
        setVisited(!visited);
    }

    // const passWithParams = () => handleVisitedCountries(country);
    

    return (
        <div className={`country ${visited ? 'visited' : 'non-visited' }` }>
            <h3 style={{color: visited ? 'red' : 'blue'}}>Name : {name?.common} </h3>
            <img src={flags.png} alt="" />
            <p>Population: {population} </p>
            <p>Area : {area} </p>
            <p><small>Code : {cca3} </small></p>
            <button onClick={() => handleVisitedCountries(country)} >Mark Visted</button>
            <button onClick={handleVisited}> {visited ? 'Visited' : 'Not Visited' } </button>
            <button onClick={() => handleVisitedFlags(country.flags.png)}>ADD FLAG</button>
            {visited ? 'I have visited this country' : 'i want to visit' }
        </div>
    );
};

export default Country;