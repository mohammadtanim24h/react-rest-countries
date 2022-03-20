import React from "react";
import "./Country.css";
const Country = (props) => {
    console.log(props)
    const { name, region, population, area, flags } = props.country;
    return (
        <div className="country">
            <img src={flags.png} alt="flag" />
            <div>
                <h2>Country Name: {name.common}</h2>
                <h3>Region: {region}</h3>
                <p>Population: {population}</p>
                <p>
                    <small>Area: {area}</small>
                </p>
            </div>
        </div>
    );
};

export default Country;
