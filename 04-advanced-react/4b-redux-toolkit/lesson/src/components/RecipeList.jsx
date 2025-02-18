import { Link } from "react-router-dom";
import {useSelector} from "react-redux";

import RecipeItem from "./RecipeItem";

function RecipeList() {
  const recipes = useSelector((state) => state.recipes);
  const listStyles = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };

  const gridStyles = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "10px",
  };

  return (
    <div style={gridStyles}>
      <h1>Recipes</h1>
      {recipes.map((recipe) => (
        <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
          <RecipeItem recipe={recipe} />
        </Link>
      ))}
    </div>
  );
}

export default RecipeList;
