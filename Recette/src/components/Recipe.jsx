import "./Recipe.css"

const Recipe = ({recipe}) => {
    return (
        <div className='recipe'>
            <div className='img-container'>
                <img src={recipe.picture} alt={recipe.title}/>
            </div>
            <div className='recipe-info'>
                <div>{recipe.title}</div>
                <div>Temps de préparation : {recipe.time} min</div>
            </div>


        </div>
    )
}

export default Recipe
