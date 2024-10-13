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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behavior

    console.log("Submitted ingredients:", ingredientsList);

    // Send the ingredientsList to the FastAPI backend
    try {
      const response = await fetch('http://localhost:8000/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ingredients: ingredientsList }), // Send the list in the request body
      });

      const data = await response.json(); // Handle the response if needed
      console.log(data); // Log the response for debugging
    } catch (error) {
      console.error("Error submitting ingredients:", error);
    }

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

        {/* Use a form with onSubmit to call handleSubmit */}
        <form id="ingredient_form" onSubmit={handleSubmit}>
         
            <button type = "submit" className = "submit-button"> <a href = "/Meal" target = "_self" rel = "noopener" style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>Submit</a></button>
          
        </form>
      </div>
    </div>
  );
};

export default IngredientInput;
