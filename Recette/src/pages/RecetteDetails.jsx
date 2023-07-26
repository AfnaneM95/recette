import './RecetteDetails.scss'
import {useParams} from 'react-router-dom'
import {useRecipes} from '../contexts/RecipeContexts'

const RecetteDetails = () => {

    const {id} = useParams()

    const {recipes} = useRecipes()
    const recipe = recipes.find((r) => r.id === id); 
    //on recupere le tableau, on passe en argument notre recipe (r), on prend l'id de cette recette et on compare a l'id de l'url.



    return (
        <>
            <div className='main'>
                <div className='title'>{recipe.title}</div>
                <div className='body'>
                    <div className='left'>
                        <img src="" alt=""/>
                        <div></div>
                    </div>
                    <div className='right'>
                        <div className='info'>
                            <div className='ingredients-list'>
                                <ul>
                                    <li>1 oeuf</li>
                                    <li>500g farine</li>
                                    <li>200g sucre</li>
                                    <li>50cl eau</li>
                                </ul>
                            </div>
                            <div className='details'>
                                <div className='time'>
                                    {recipe.time} min
                                </div>
                                <div className='level'>
                                    {recipe.difficulty}
                                </div>
                                <div className='tags'>
                                    <div className='tag'>#crepe</div>
                                    <div className='tag'>#crepe</div>
                                    <div className='tag'>#crepe</div>
                                </div>
                                <div className='portion'>
                                    {recipe.portion}
                                </div>
                            </div>
                        </div>
                        <div className='info'>
                            <div className='steps'>
                                {recipe.steps}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecetteDetails
