import {useState} from 'react'
import './FormRecipe.scss'
import {useRecipes} from '../contexts/RecipeContexts'
import Ingredient from '../components/Ingredient'
import {v4 as uuidv4} from 'uuid';
import Tag from "../components/Tag.jsx";

const Formulaire = () => {
    const [title, setTitle] = useState('')
    const [steps, setSteps] = useState('')
    const [picture, setPicture] = useState('')
    const [time, setTime] = useState('')
    const [difficulty, setDifficulty] = useState('')
    const [portion, setPortion] = useState('')
    const [tags, setTags] = useState('')
    const [tagList, setTagList] = useState([])
    const [ingredientList, setIngredientList] = useState([])
    const [ingredients, setIngredients] = useState('')
    const [ingredientsQuantity, setIngredientsQuantity] = useState('')
    const [ingredientsUnite, setIngredientsUnite] = useState('')
    const [completeRecipe, setCompleteRecipe] = useState(false)

    const resetFields = () => {
        setTitle('')
        setSteps('')
        setPicture('')
        setTime('')
        setDifficulty('')
        setPortion('')
        setTagList([])
        setTags('')
        setIngredientsQuantity('')
        setIngredients('')
        setIngredientsUnite('')
        setIngredientList([])
    }

    const {addRecipe} = useRecipes()

    const addIngredient = e => {
        e.preventDefault()
        if (ingredients && ingredientsQuantity && ingredientsUnite) {
            const objIngredients = {
                ingredients: ingredients,
                ingredientsQuantity: ingredientsQuantity,
                ingredientsUnite: ingredientsUnite
            }
            setIngredientList([...ingredientList, objIngredients]);
            setIngredients('');
            setIngredientsQuantity('');
            setIngredientsUnite('');
        }
    }

    const addTags = (e) => {
        e.preventDefault()
        if (tags) {
            setTagList([...tagList, tags])
            setTags('');
        }
    }

    const handleSubmit = e => {
        e.preventDefault()
        addRecipe({
            id: uuidv4(),
            title: title,
            steps: steps,
            picture: picture,
            time: time,
            difficulty: difficulty,
            portion: portion,
            tagList: tagList,
            ingredientList: ingredientList
        })
        setCompleteRecipe(true);
        resetFields();
    }

    return (
        <div className='container-form'>
            <div className='divForm'>
                <h1>Ajouter une nouvelle recette</h1>
                <form className='form' onSubmit={handleSubmit}>
                    <input
                        required
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        type='text'
                        placeholder='Titre de la recette'
                        className='input'
                    />
                    <input
                        required
                        value={steps}
                        onChange={e => setSteps(e.target.value)}
                        type='text'
                        placeholder='Étapes de la recette'
                        id='inputSteps'
                    />
                    <input
                        required
                        value={picture}
                        onChange={e => setPicture(e.target.value)}
                        type='text'
                        placeholder='Photo url'
                        className='input'
                    />
                    <input
                        required
                        value={time}
                        onChange={e => setTime(e.target.value)}
                        type='number'
                        placeholder='Durée'
                        className='input'
                    />
                    <select
                        required
                        value={difficulty}
                        onChange={e => setDifficulty(e.target.value)}
                        placeholder='Difficulté'
                        id='selectDiff'
                    >
                        <option value=''>-- Choisissez une difficulté --</option>
                        <option value='facile'>Facile</option>
                        <option value='moyen'>Moyen</option>
                        <option value='difficile'>Difficile</option>
                    </select>
                    <input
                        required
                        value={portion}
                        onChange={e => setPortion(e.target.value)}
                        type='number'
                        placeholder='Portions'
                        className='input'
                        min='1'
                        max='5'
                    />
                    <div className='tags-form'>
                        <input
                            value={tags}
                            onChange={e => setTags(e.target.value)}
                            type='text'
                            placeholder='Tags'
                            id='inputTags'
                        />
                        <button className='add-tag-btn' onClick={addTags}>
                            +
                        </button>
                    </div>
                    <div className='tag-display-form'>
                        {tagList.map((tag, i) => (
                            <Tag key={i} tag={tag}/>
                        ))}
                    </div>
                    <div className='ingredientsForm'>
                        <input
                            value={ingredientsQuantity}
                            onChange={e => setIngredientsQuantity(e.target.value)}
                            type='number'
                            placeholder='Poids'
                        ></input>
                        <select
                            value={ingredientsUnite}
                            onChange={e => setIngredientsUnite(e.target.value)}
                        >
                            <option value=''>-- Unité --</option>
                            <option value='g'>g</option>
                            <option value='kg'>kg</option>
                            <option value='L'>L</option>
                        </select>
                        <input
                            value={ingredients}
                            onChange={e => setIngredients(e.target.value)}
                            type='text'
                            placeholder='Ingrédients'
                        />
                        <button className='add-ingredient-btn' onClick={addIngredient}>
                            +
                        </button>
                    </div>
                    <div className='ingredient-display'>
                        {ingredientList.map((ingredient, i) => (
                            <Ingredient key={i} ingredient={ingredient}/>
                        ))}
                    </div>
                    <div className='validate-footer'>
                        <button style={{border: completeRecipe ? "2px solid limegreen" : null}}
                                className='submit-button'
                                type='submit'>Valider
                        </button>
                        {completeRecipe && <div>Ajouté !</div>}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Formulaire
