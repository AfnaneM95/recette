import './RecetteDetails.scss'
import {useParams} from 'react-router-dom'
import {useRecipes} from '../contexts/RecipeContexts'
import Tag from "../components/Tag.jsx";
import Ingredient from "../components/Ingredient.jsx";
import {useState} from "react";

const RecetteDetails = () => {
    const {id} = useParams()
    const {recipes} = useRecipes()
    const recipe = recipes.find((r) => r.id === id);
    //on recupere le tableau, on passe en argument notre recipe (r), on prend l'id de cette recette et on compare a l'id de l'url.

    const [portionChange, setPortionChange] = useState(recipe.portion)

    const portionIncrease = () => {
        if (portionChange < 5) {
            setPortionChange(portionChange + 1);
        }
    }

    const portionDecrease = () => {
        if (portionChange > 1) {
            setPortionChange(portionChange - 1);
        }
    }


    return (
        <>
            <div className='main'>
                <div className='title'>{recipe.title}</div>
                <div className='body'>
                    <div className='left'>
                        <img src={recipe.picture} alt={recipe.title}/>
                    </div>
                    <div className='right'>
                        <div className='info'>
                            <ul className='ingredients-list'>
                                {recipe.ingredientList.map((ingredient, i) => (
                                    <li key={i}><Ingredient ingredient={ingredient} portionChange={portionChange}/></li>
                                ))}
                            </ul>
                            <div className='details'>
                                <div className='time'>
                                    {recipe.time} min
                                </div>
                                <div className='level'>
                                    {recipe.difficulty}
                                </div>
                                <div className='tags'>
                                    {recipe.tagList.map((tag, i) => (
                                        <Tag key={i} tag={tag}/>
                                    ))}
                                </div>
                                <div className='portion'>
                                    <span>Portions : </span>
                                    <button onClick={portionDecrease}>-</button>
                                    {portionChange}
                                    <button onClick={portionIncrease}>+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecetteDetails
