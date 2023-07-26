import {useState} from 'react'

const Ingredient = ({ingredient, portionChange}) => {
    const [portionFactor] = useState(ingredient.ingredientsQuantity / portionChange);

    return (
        <div>
            {portionChange && <div>
                {portionFactor * portionChange}
                {ingredient.ingredientsUnite} de {ingredient.ingredients}
            </div>}
            {!portionChange && <div>
                {ingredient.ingredientsQuantity}
                {ingredient.ingredientsUnite} de {ingredient.ingredients}
            </div>}
        </div>
    )
}

export default Ingredient
