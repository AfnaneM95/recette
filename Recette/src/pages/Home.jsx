import React, { useState } from 'react'
import './Home.scss'
import { useRecipes } from '../contexts/RecipeContexts'
import Recipe from '../components/Recipe'
import { Link } from 'react-router-dom'

const Home = () => {
  const { recipes } = useRecipes()
  const [sortedRecipes, setSortedRecipes] = useState(recipes);

  const sortByTime = () => {
    const sortedRecipes = [...recipes].sort((a, b) => a.time - b.time);
    setSortedRecipes(sortedRecipes);
  }

  const sortByDate = () => {
    const sortedRecipes = [...recipes].slice().reverse();
    setSortedRecipes(sortedRecipes);
  }

  return (
    <>
      <div className='container-home'>
        <div className='sort-buttons'>
          <button onClick={sortByDate}>Trier par date</button>
          <button onClick={sortByTime}>Trier par temps de préparation</button>
        </div>

        <h3>Recettes</h3>
        {sortedRecipes.map((recipe, i) => (
          <div className='recipe' key={recipe.id}>
            <Link to={`/details-recette/${recipe.id}`}>
              <Recipe key={i} recipe={recipe} />
              </Link>
          </div>
        ))}
      </div>
    </>
    
  )
}

export default Home
