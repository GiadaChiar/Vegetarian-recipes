// Big block about Recepice the fist one on the Top

import BlockRecipe from './blockRecipeTop';

type FirstBigBlockProps = {
    recipe: any;
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
                    description="Kilo Cal"
                    value={`${recipe.calories} Kcal`}
                />

                <BlockRecipe
                    classEl="block"
                    icon="/images/fork.png"
                    description="Servings"
                    value={recipe.servings}
                />
            </div>
            <div className='imgContainer'>
                <img src ={recipe.image} alt="recipe picture"/>
            </div>
        </>
    )
}