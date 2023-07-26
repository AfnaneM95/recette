import React, { useState, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid';

const RecipeContext = React.createContext()

const RecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([
    {
      id: uuidv4(),
      title: 'Gnocchis arrabiata',
      steps: 'testSteps',
      picture: 'https://www.cookwithkushi.com/wp-content/uploads/2018/12/IMG_5574_.jpg',
      time: 20,
      difficulty: 1,
      portion: 'testPortion', 
      tags: ['tag1', 'tag2', 'tag3'],
      ingredients: {
        ingredients: 'Farine',
        ingredientsQuantity: 500,
        ingredientsUnite: 'g'
      }
      //check param url react router dom
    },
    {
      id: uuidv4(),
      title: 'Boeuf bourgignon',
      steps: 'testSteps',
      picture: 'https://img-3.journaldesfemmes.fr/3q1hdTGIoj2XznsQWzr9V0Cg3KY=/800x600/smart/d6db2baa728b47f8adbf30b99a957dc0/recipe-jdf/10002051.jpg',
      time: 30,
      difficulty: 3,
      portion: 'testPortion',
      tags: ['tag4', 'tag2', 'tag6'],
      ingredients: {
        ingredients: 'Farine',
        ingredientsQuantity: 500,
        ingredientsUnite: 'g'
      }
    },
    {
      id: uuidv4(),
      title: 'Salade de tomates',
      steps: 'testSteps',
      picture: 'https://static.750g.com/images/1200-630/26b5187584dca9d6a78241a86f870961/salade-de-tomates.jpeg',
      time: 10,
      difficulty: 1,
      portion: 'testPortion',
      tags: ['tag1', 'tag7', 'tag5'],
      ingredients: {
        ingredients: 'Farine',
        ingredientsQuantity: 500,
        ingredientsUnite: 'g'
      }
    }
  ])

  const addRecipe = recipe => {
    setRecipes([...recipes, recipe])
  }

  return (
    <RecipeContext.Provider value={{ addRecipe, recipes }}>
      {children}
    </RecipeContext.Provider>
  )
}

export default RecipesProvider

export const useRecipes = () => useContext(RecipeContext)
