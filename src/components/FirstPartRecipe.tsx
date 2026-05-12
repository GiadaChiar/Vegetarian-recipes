// Big block about Recepice the fist part one on the Top

import BlockRecipe from './blockRecipeTop';



export type Recipe = {
    id: number;
    title: string;
    readyInMinutes: number;
    cuisines: string |string[];
    servings: number;
    image: string;
    healthScore: number;
};


type FirstBigBlockProps = {
    recipe: Recipe;
};






export function FirstBigBlock({recipe}: FirstBigBlockProps) {
    return (
        <>
            <h1 id="title_recipe">{recipe.title}</h1>
            <div className="square_top">
                <BlockRecipe
                    classEl="block"
                    icon="/images/clock.png"
                    description="Prep Time"
                    value={`${recipe.readyInMinutes} min`}
                />

                <BlockRecipe
                    classEl="block"
                    icon="/images/meat.png"
                    description="Cuisine"
                    value={Array.isArray(recipe.cuisines)
                        ? recipe.cuisines.join(", ")
                        : recipe.cuisines}
                />

                <BlockRecipe
                    classEl="block"
                    icon="/images/fork.png"
                    description="Servings"
                    value={recipe.servings.toString()}
                />
            </div>
            <div className='imgContainer'>
                <img src ={recipe.image} alt="recipe picture"/>
            </div>
        </>
    )
}