import React, { useEffect, useState } from 'react';
import { X, Play } from 'lucide-react';
import { getMealDetails } from '../services/api';

export function MealModal({ mealId, onClose }) {
  const [mealDetails, setMealDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDetails() {
      try {
        setLoading(true);
        const details = await getMealDetails(mealId);
        setMealDetails(details);
      } catch (err) {
        setError('Failed to load meal details.');
      } finally {
        setLoading(false);
      }
    }

    if (mealId) {
      fetchDetails();
    }
  }, [mealId]);

  // Prevent scrolling on body when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (loading) {
    return (
      <div className="modal-overlay">
        <div className="spinner" style={{ borderColor: 'white', borderLeftColor: 'var(--primary-color)' }}></div>
      </div>
    );
  }

  if (error || !mealDetails) {
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={onClose}><X size={20} /></button>
          <div className="status-message">{error || 'Meal details not found.'}</div>
        </div>
      </div>
    );
  }

  // Extract ingredients and measures
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = mealDetails[`strIngredient${i}`];
    const measure = mealDetails[`strMeasure${i}`];
    
    if (ingredient && ingredient.trim() !== '') {
      ingredients.push(`${measure ? measure.trim() : ''} ${ingredient.trim()}`);
    }
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><X size={20} /></button>
        
        <img 
          src={mealDetails.strMealThumb} 
          alt={mealDetails.strMeal} 
          className="modal-image" 
        />
        
        <div className="modal-body">
          <h2 className="modal-title">{mealDetails.strMeal}</h2>
          
          <div className="modal-tags">
            {mealDetails.strCategory && (
              <span className="meal-category">{mealDetails.strCategory}</span>
            )}
            {mealDetails.strArea && (
              <span className="meal-area">{mealDetails.strArea}</span>
            )}
          </div>
          
          <h3 className="modal-section-title">Ingredients</h3>
          <ul className="ingredients-list">
            {ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          
          <h3 className="modal-section-title">Instructions</h3>
          <p className="instructions">{mealDetails.strInstructions}</p>
          
          {mealDetails.strYoutube && (
            <a 
              href={mealDetails.strYoutube} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="youtube-link"
            >
              <Play size={20} />
              Watch Video Recipe
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
