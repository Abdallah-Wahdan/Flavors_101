import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import flags from "./Flags.js";
import "./ui.css";

function Recipes() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [apiResponse, setApiResponse] = useState(null);

  const handleFlagClick = async (flag) => {
    setSelectedCountry(flag.country);
    console.log(`Flag clicked: ${flag.src}, Country: ${flag.country}`);

    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${flag.country}`
      );
      const data = await response.json();
      console.log("API Response:", data);

      const limitedMeals = data.meals.slice(0, 5);
      setApiResponse(limitedMeals);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <Container fluid>
      <section className="flag-section">
        <div className="image-grid">
          {flags.map((flag, index) => (
            <button
              key={index}
              onClick={() => handleFlagClick(flag)}
              className="flag-button"
            >
              <img src={flag.src} alt={`${flag.country} Flag`} className="flag-image" />
            </button>
          ))}
        </div>
      </section>
      {(selectedCountry || apiResponse) && (
       <div className="PageBackground">
       <div className="centered">
          {selectedCountry && (
            <div className="selected-country">
              <h3>{selectedCountry}</h3>
            </div>
          )}
          {apiResponse && (
            <div className="Food-list">
              <h3>Meals Form {selectedCountry}</h3>
              <ul className="recipe-list">
                {apiResponse.map((meal) => (
                  <li key={meal.idMeal} className="recipe-item">
                    <img
                      src={meal.strMealThumb}
                      alt={meal.strMeal}
                      className="recipe-image"
                    />
                    <span>{meal.strMeal}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        </div>
      )}
    </Container>
  );
}

export default Recipes;