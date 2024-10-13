'use client'

import React, { useState } from 'react';
import './IngredientInput.css'; // Import for simple styling

const IngredientInput: React.FC = () => {
  const [ingredient, setIngredient] = useState<string>(''); // State for the current input
  const [ingredientsList, setIngredientsList] = useState<string[]>([]); // State for the list of ingredients
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(true); // Open dropdown by default

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIngredient(e.target.value);
  };

  const handleAddIngredient = () => {
    if (ingredient.trim()) {
      setIngredientsList((prevIngredients) => [...prevIngredients, ingredient]);
      setIngredient(''); // Clear input after adding
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAddIngredient();
    }
  };

  const handleRemoveIngredient = (index: number) => {
    setIngredientsList((prevIngredients) =>
      prevIngredients.filter((_, i) => i !== index)
    );
  };

  const handleSubmit = () => {
    console.log("Submitted ingredients:", ingredientsList);
    // Clear all the ingredients after submission
    setIngredientsList([]);
  };

  return (
    <div className="ingredient-input-container">
      <div className="left-menu">
        <div className="input-section">
          <h3>Enter Ingredient:</h3>
          <div className="input-box">
            <input
              type="text"
              value={ingredient}
              onChange={handleInputChange}
              onKeyDown={handleKeyPress} // Add this to handle Enter key
              placeholder="Type an ingredient"
            />
            <button onClick={handleAddIngredient}>+</button>
          </div>
        </div>

        {isDropdownOpen && (
          <ul className="dropdown-list">
            {ingredientsList.map((ing, index) => (
              <li key={index} className="ingredient-item">
                {ing}
                <button
                  className="remove-button"
                  onClick={() => handleRemoveIngredient(index)}
                >
                  ✖
                </button>
              </li>
            ))}
          </ul>
        )}

        <button className="submit-button" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default IngredientInput;
