import React from 'react';

export function MealCard({ meal, onClick }) {
  return (
    <div className="meal-card" onClick={() => onClick(meal.idMeal)}>
      <div className="meal-image-container">
        <img 
          src={meal.strMealThumb} 
          alt={meal.strMeal} 
          className="meal-image"
          loading="lazy"
        />
      </div>
      <div className="meal-info">
        <h3 className="meal-title" title={meal.strMeal}>{meal.strMeal}</h3>
        <div className="meal-tags">
          {meal.strCategory && (
            <span className="meal-category">{meal.strCategory}</span>
          )}
          {meal.strArea && (
            <span className="meal-area">{meal.strArea}</span>
          )}
        </div>
      </div>
    </div>
  );
}
