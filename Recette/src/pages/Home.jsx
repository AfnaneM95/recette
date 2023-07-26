import {useState} from 'react'
import './Home.scss'
import {useRecipes} from '../contexts/RecipeContexts'
import Recipe from '../components/Recipe'
import {Link} from 'react-router-dom'

const Home = () => {
    const {recipes} = useRecipes();
    const [sortedRecipes, setSortedRecipes] = useState(recipes);
    const [inputText, setInputText] = useState("");

    const sortByTime = () => {
        const sortedRecipes = [...recipes].sort((a, b) => a.time - b.time);
        setSortedRecipes(sortedRecipes);
    }

    const sortByDate = () => {
        const sortedRecipes = [...recipes].slice().reverse();
        setSortedRecipes(sortedRecipes);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const boop = () => {
        console.log(recipes)
    }

    return (
        <>
            <div className='container-home'>
                <div className='container-header'>
                    <h3>Recettes</h3>
                    <form className="filter" onSubmit={handleSubmit}>
                        <input type="text" placeholder='Recherche' onChange={(e) => setInputText(e.target.value)}/>
                        <button type='submit'>Rechercher</button>
                    </form>
                    <div className='sort-buttons'>
                        <button onClick={sortByDate}>Trier par date</button>
                        <button onClick={sortByTime}>Trier par temps de préparation</button>
                    </div>
                </div>
                <button onClick={boop}>AAA</button>
                {sortedRecipes.map((recipe, i) => (
                    recipe.title.toLowerCase().includes(inputText.toLowerCase()) &&
                    <div className='recipe' key={i}>
                        <Link to={`/details-recette/${recipe.id}`}>
                            <Recipe key={i} recipe={recipe}/>
                        </Link>
                    </div>
                ))}
            </div>
        </>

    )
}

export default Home
