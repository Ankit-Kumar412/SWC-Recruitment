import React, { useState, useEffect } from 'react';
import { SearchBar } from './components/SearchBar';
import { MealList } from './components/MealList';
import { MealModal } from './components/MealModal';
import { useDebounce } from './hooks/useDebounce';
import { searchMeals } from './services/api';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedMealId, setSelectedMealId] = useState(null);

  // Debounce the search term so we don't spam the API
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    async function fetchMeals() {
      setLoading(true);
      setError(null);
      
      try {
        const results = await searchMeals(debouncedSearchTerm);
        setMeals(results);
      } catch (err) {
        setError('Failed to fetch meals. Please try again later.');
        setMeals([]);
      } finally {
        setLoading(false);
      }
    }

    fetchMeals();
  }, [debouncedSearchTerm]);

  return (
    <div className="container">
      <header>
        <h1>Recipe Finder</h1>
        <p>Discover delicious meals from around the world</p>
      </header>

      <main>
        <SearchBar value={searchTerm} onChange={setSearchTerm} />

        {loading ? (
          <div className="status-message">
            <div className="spinner"></div>
            Loading meals...
          </div>
        ) : error ? (
          <div className="status-message" style={{ color: 'var(--primary-color)' }}>
            {error}
          </div>
        ) : (
          <MealList meals={meals} onMealClick={setSelectedMealId} />
        )}
      </main>

      {selectedMealId && (
        <MealModal 
          mealId={selectedMealId} 
          onClose={() => setSelectedMealId(null)} 
        />
      )}
    </div>
  );
}

export default App;
