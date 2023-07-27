import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Formulaire from './pages/FormRecipe'
import RecipesProvider from './contexts/RecipeContexts'
import Home from './pages/Home'
import Navbar from './Layout/Navbar'
import RecipeDetails from './pages/RecipeDetails.jsx'

function App () {
  return (
    <RecipesProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/formulaire' element={<Formulaire />} />
          <Route path='/details-recette/:id' element={<RecipeDetails />} />
        </Routes>
      </BrowserRouter>
    </RecipesProvider>
  )
}

export default App
