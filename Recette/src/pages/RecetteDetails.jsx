import React from 'react'
import './RecetteDetails.scss'
import { useParams } from 'react-router-dom'
import { useRecipes } from '../contexts/RecipeContexts'

const RecetteDetails = () => {

    const {id} = useParams()
    const idRecipes = Number(id)

    const {recipes} = useRecipes()
    const recipe = {id:recipes[idRecipes]}

  return (
    <>
        <div className='main'>
            <div className='title'>{recipe.title}</div>
            <div className='body'>
                <div className='left'>
                    <img src="" alt="" />
                    <div>{recipe.steps}</div>
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
                                {recipe.time}
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
                                portion
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