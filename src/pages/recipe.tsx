import "../style/global.scss";
import "../style/recipe.scss";

import RecipePage from "../components/getIdRecipe";
import FAKEFirstBigBlock from "../components/FAKEfirstBLPOCK";

function Recipe() {
  return (
    <>
      <div style={{ marginTop: "100px" }}>
        <RecipePage />
        <FAKEFirstBigBlock/>
      </div>
    </>
  );
}

export default Recipe;

