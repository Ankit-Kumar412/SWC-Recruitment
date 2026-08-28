import React from 'react';
import { MealCard } from './MealCard';

export function MealList({ meals, onMealClick }) {
  if (!meals || meals.length === 0) {
    return <div className="status-message">No meals found. Try a different search!</div>;
  }

  return (
    <div className="meal-grid">
      {meals.map((meal) => (
        <MealCard key={meal.idMeal} meal={meal} onClick={onMealClick} />
      ))}
    </div>
  );
}
